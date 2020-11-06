/*
 * @Date           : 2020-11-05 21:48:34
 * @FilePath       : /node-quasar-fullstack/app/controllers/file.controller.js
 * @Description    : 
 */

const MESSAGE_CODE = require("../config/code.config");
const fs=require("fs")

const formidable = require('formidable');

const img_root_folder="./../../img-upload/"
//上传图片 中间控制器 ，返回 保存后的 路径
exports.upload_img= (req, res, next) => {
    // const form = formidable({ multiples: true });
    //判断根目录是否存在
    if(!fs.existsSync(img_root_folder)){
        fs.mkdirSync(img_root_folder,'0777')
    }

    //创建上传表单

    let form= new formidable.IncomingForm({
        encoding:'utf-8', //编码
        uploaDir: img_root_folder, // 存放图片的路径  可以使用 fs.rename() 进行移动
        keepExtensions:true,// 保留文件扩展名
        maxFileSize:2*1024*1024, // 上传图片大小限制
        multiples:false,//一条数据



    }); 
  
    form.parse(req, (err, fields, files) => {

        console.log('fields-------------',fields);
        console.log('files-------------',files);
      if (err) {
        next(err);
        return;
      }
      res.status(200).send({ fields, files });

    });
  }

// 删除图片  ,通过对象， 和字段的  键名 删除图片

exports.delete_img = (data,keyname)=>{

}