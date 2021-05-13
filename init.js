/*
 * @Date           : 2020-10-08 21:49:56
 * @FilePath       : /node-quasar-fullstack/init.js
 * @Description    :
 */
// 使用 require 方法加载 fs 核心模块
var fs = require("fs");
var colors = require("colors/safe");
var shell = require("shelljs");
function getIPAddress() {
  var interfaces = require("os").networkInterfaces();
  // console.log('interfaces',interfaces);
  let arr = [];
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        // return alias.address;
        arr.push(alias);
      }
    }
  }
  // console.log('arr',arr);
  let ip = "";
  arr.map(x => {
    // wifi 情况
    if (x.address.includes("192.168.0.")) {
      ip = x.address;
    }
  });
  return ip;
}
let ip = getIPAddress();

let serverport = 19090;
let webpageport = 20000;
let apidocport = 19092;

let s_url = `http://${ip}:${serverport}/`;
let w_url = `http://${ip}:${webpageport}/`;
let a_url = `http://${ip}:${apidocport}/`;

let env_config = {
  userhost: ip,
  serverport,
  webpageport,
  apidocport,
  s_url,
  a_url,
  w_url
};
let env_config_str = ` module.exports= ${JSON.stringify(env_config)} `;
let apidoc_cnfig = {
  name: "锦年node全栈学习项目API",
  version: "0.1.0",
  description: "明日复明日，万事成蹉跎。",
  title: "锦年node全栈学习项目API",
  url: `http://${ip}:${serverport}`,
  header: {
    title: "My own header title"
  },
  footer: {
    title: "My own footer title"
  }
};

let doc_cmd = ` http-server ./apidoc -a ${ip} -p 19092 -s -o `;

//1. 异步写入  env.js
//2. 异步 写入 apidoc.json
//3. 异步读取  package.json
//4. 异步 写入 package.json
//5. 执行命令
//1. 异步写入  env.js
fs.promises.writeFile("./env.js", env_config_str).then(() => {
  console.log("写入环境配置信息---成功");
  //2. 异步 写入 apidoc.json
  fs.promises
    .writeFile("./apidoc.json", JSON.stringify(apidoc_cnfig))
    .then(() => {
      console.log("写入API文档服务基础信息---成功");
      //3. 异步读取  package.json
      fs.promises.readFile("./package.json").then(data => {
        console.log("读取package.json---成功");
        let package_json = JSON.parse(data.toString());

        package_json["scripts"]["start-docpage"] = doc_cmd;
        package_json["scripts"]["open-serverpage"] = `opener  ${s_url}`;
        package_json["scripts"]["open-webpage"] = `opener  ${w_url}`;

        // //4. 异步 写入 package.json

        fs.promises
          .writeFile("./package.json", JSON.stringify(package_json))
          .then(() => {
            //5. 执行命令
            console.log("写入package.json---成功");
            console.log("");
            console.log("");
            console.log(
              colors.yellow("----------欢迎来到錦年node全栈学习项目----------")
            );
            // shell.exec("npm run start");
          });
      });
    });
});
