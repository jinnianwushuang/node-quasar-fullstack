/*
 * @Date           : 2020-10-08 21:49:56
 * @FilePath       : /node-quasar-fullstack/initdoc.js
 * @Description    :
 */
// 使用 require 方法加载 fs 核心模块
 
var fs = require("fs");
 
const env_config = require("./env.js");
var colors = require("colors/safe");
var shell = require("shelljs");
var liveServer = require("live-server");
 

let apidoc_cnfig = {
  name: "锦年node全栈学习项目API",
  version: "0.1.0",
  description: "明日复明日，万事成蹉跎。",
  title: "锦年node全栈学习项目API",
  url: `${env_config.s_url}`,

};

var params = {
  port: env_config.apidocport, // Set the server port. Defaults to 8080.
  host: env_config.IP, // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: "./apidoc/", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  // ignore: 'scss,my/templates', // comma-separated string for paths to ignore
  file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  // mount: [['/components', './node_modules']], // Mount a directory to a route.
  logLevel: 0, // 0 = errors only, 1 = some, 2 = lots
  // middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};




  console.log("写入环境配置信息---成功");
 
  fs.promises
    .writeFile("./apidoc.json", JSON.stringify(apidoc_cnfig))
    .then(() => {
      console.log("写入API文档服务基础信息---成功");
 
      liveServer.start(params);
    });

