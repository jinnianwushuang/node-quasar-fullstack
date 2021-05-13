/*
 * @Date           : 2021-05-13 22:36:50
 * @FilePath       : /node-quasar-fullstack/opener.js
 * @Description    : 
 */
 
const colors = require("colors/safe");
console.log( colors.yellow("--------------------- 打开页面 opener     opener.js 启动 ----------------------") );


var fs = require("fs");
var shell = require("shelljs");
var opener = require("opener");
 
const env_config = require("./env.js");

 
if (env_config.is_dev) {
    setTimeout(function() {
      opener(env_config.s_url);
      opener(env_config.w_url);
      opener(env_config.a_url);
      console.log(colors.yellow(`open  page    ${env_config.s_url}  `));
      console.log(colors.yellow(`open  page    ${env_config.w_url}  `));
      console.log(colors.yellow(`open  page    ${env_config.a_url}  `));
    }, 10000);
  }