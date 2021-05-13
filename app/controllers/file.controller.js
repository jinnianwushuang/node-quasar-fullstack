/*
 * @Date           : 2020-11-03 15:08:52
 * @FilePath       : /kaleva-backend/app/controllers/file.controller.js
 * @description    :
 */
const formidable = require("formidable");
const MESSAGE_CODE = require("../config/code.config");
const path = require("path");
const timestamp = require("time-stamp");
const fs = require("fs");
// 处理图片上传
exports.uploaadimg = async (req, res) => {
  // 获取表单数据
  const id = req.params.id;
  let time = timestamp("YYYYMMDD");
  // return
  // 存放图片的文件夹  根文件夹
  let img_root_folder = "./../../img-upload/";
  let img_root_folder_fullpath = path.normalize(__dirname + img_root_folder);
  if (!fs.existsSync(img_root_folder_fullpath)) {
   // console.log("文件夹不存在 ----->" + img_root_folder_fullpath);
    fs.mkdirSync(img_root_folder_fullpath, 0777);
  }
  // 带时间的路径
  let img_time_folder = img_root_folder + time + "/";
  let img_time_folder_fullpath = path.normalize(__dirname + img_time_folder);
  if (!fs.existsSync(img_time_folder_fullpath)) {
   // console.log("文件夹不存在 ----->" + img_time_folder_fullpath);
    fs.mkdirSync(img_time_folder_fullpath, 0777);
  }
 // console.log(" panding            -------------1 ");
  //创建上传表单
  let form = new formidable.IncomingForm();
  // 跨磁盘操作
  //// console.log(form);
  form.encoding = "utf-8"; //设置 编码
  //  form.uploadDir = img_root_folder; //设置上传目录
  form.keepExtensions = true; //保留后缀
  form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
  form.type = true;
  form.uploadDir = path.normalize(__dirname + img_time_folder); //设置上传目录
  // //// console.log(path.normalize(__dirname+'../../static'))
  // 解析表单
  //// console.log(req);
 // console.log("--------------服务端收到的表单------------");
  //// console.log(form);
  return await new Promise((resolve, reject) => {
    try {
      form.parse(req, (err, fields, files) => {
        //// console.log("----------files.file----------");
        //// console.log(files.file);
        //// console.log(fields);
       // console.log(" panding            -------------2 ");
        if (err) {
          resolve({
            code: MESSAGE_CODE.ERROR_SERVER_WRONG,
            message: "Error updating Artical with id=" + id
          });
        }
        let uplodfile = files.file; //  '锦.png'
        // 上传图片，重命名：时间+随机数+后缀名
        // let extname = path.extname(uplodfile.name);
        // let rd = parseInt(Math.random() * 8999 + 10000);
        // 获取原来的路径
        //// console.log(uplodfile);
       // console.log(" panding            -------------3");
        let oldpath = uplodfile.path;
        //// console.log(newpath);
        // 文件名
        // let pathname = time + rd + extname;
        let file_save_name = path.basename(oldpath);
        // 规划新路径
        // let newpath = path.normalize(form.uploadDir + file_save_name);
        //// console.log({
        //   file_save_name,
        //   // pathname,
        //   newpath,
        //   oldpath
        // });
        // 移动文件
        // fs.renameSync( oldpath,newpath  )
        resolve({
          file_name: time + "/" + file_save_name
        });
      });
    } catch (error) {
      resolve({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: "Error updating Artical with id=" + id
      });
    }
  });
};
exports.delete_img_by_path = (item, keyname) => {
 // console.log();
  if (!keyname) {
   // console.log("---------删除文件 --->  文件键名 未传");
    return false;
  }
  let old_path = item[keyname] || "";
  if (!old_path) {
   // console.log("---------删除文件 --->   原始值 为空");
    return false;
  }
  // 去删除文件
  let img_root_folder = "./../../img-upload/";
  // if (!fs.existsSync(img_root_folder)) {
  //   fs.mkdirSync(img_root_folder, 0776);
  // }
  old_path = path.normalize(__dirname + img_root_folder + old_path);
 // console.log("---------删除文件 --->   " + old_path);
  if (fs.existsSync(old_path)) {
    fs.unlink(old_path, err => {
      if (err) throw err;
     // console.log("successfully deleted -------->   " + old_path);
    });
  } else {
   // console.log("---------删除文件 --->   文件夹存在 ----->" + old_path);
  }
};