/*
 * @Date           : 2020-10-08 21:49:56
 * @FilePath       : /node-quasar-fullstack/initdoc.js
 * @Description    :
 */
// 使用 require 方法加载 fs 核心模块
 
var fs = require("fs");
 
const env_config = require("./env.js");

 

let apidoc_cnfig = {
  name: "锦年node全栈学习项目API",
  version: "0.1.0",
  description: "明日复明日，万事成蹉跎。",
  title: "锦年node全栈学习项目API",
  url: `${env_config.s_url}`,

};





  console.log("写入环境配置信息---成功");
  //2. 异步 写入 apidoc.json
  fs.promises
    .writeFile("./apidoc.json", JSON.stringify(apidoc_cnfig))
    .then(() => {
      console.log("写入API文档服务基础信息---成功");
      //3. 异步读取  package.json
  
    });

