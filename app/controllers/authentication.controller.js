/*
 * @Date           : 2020-10-15 00:03:32
 * @FilePath       : /node-quasar-fullstack/app/controllers/authentication.controller.js
 * @Description    : 
 */

const MESSAGE_CODE = require("../config/code.config");
const timestamp = require("time-stamp");
const md5 = require("md5");
const default_auth= require("../../auth.config")
let day_token = "";
let d_username =  default_auth.username ;
let d_password = md5( default_auth.password );
exports.login = (req, res) => {
  let check_username = req.body.username == d_username;
  let check_password = req.body.password == d_password;
  console.log('check_username ',check_username );
  console.log('check_password ',check_password );
  // 通过账号密码 + 盐值 的方式来计算 ， 密码在客户端 需要先 进行一次  md5  ,
  // 服务器端 计算出 定值
  if (check_username && check_password) {
    // 账号密码都正确的话 ，计算 当天盐值
    day_token = md5(d_username + d_password + timestamp("YYYYMMDD"));
    console.log("day_token", day_token);
    res.send({
      code: MESSAGE_CODE.SUCCESS,
      message: "登录成功",
      data: {
        token: day_token,
      },
    });
    return;
  } else {
    res.send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "账号或密码错误",
      data: {},
    });
    return;
  }
  // let salt_val= 569
};
exports.check_authenticate = (req, res) => {
  // console.log("---");
  // console.log(req.url);
  // console.log("---");
  let req_url = req.url || "";
  // "".includes()
  let white_check =
  req_url.includes("/file")||
    req_url.includes("/api/login") || req_url.includes("/api/client");
  // 放行 客户端 以及登录
  if (white_check) {
    return true;
  } else {
    let link_id = req.headers["link-id"];
    // console.log(req.headers["link-id"]);
    day_token = md5(d_username + d_password + timestamp("YYYYMMDD"));
    if (link_id == day_token) {
      return true;
    } else {
      return false;
    }
  }
};