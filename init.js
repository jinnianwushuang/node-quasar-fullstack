/*
 * @Date           : 2020-10-08 21:49:56
 * @FilePath       : /node-quasar-fullstack/init.js
 * @Description    :
 */
// 使用 require 方法加载 fs 核心模块
var fs = require("fs");
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
let env_config = {
  userhost: ip,
  serverport: 19090,
  webpageport: 20000,
  apidocpot: 19092
};
let env_config_str = ` module.exports= ${JSON.stringify(env_config)} `;
fs.writeFile("./env.js", env_config_str, function(error) {
  if (error) {
    console.log("写入环境配置信息---失败");
  } else {
    console.log("写入环境配置信息---成功");
  }
});
let apidoc_cnfig = {
  name: "锦年node全栈学习项目API",
  version: "0.1.0",
  description: "明日复明日，万事成蹉跎。",
  title: "锦年node全栈学习项目API",
  url: `http://${ip}:19090`
};
fs.writeFile("./apidoc.json", JSON.stringify(apidoc_cnfig), function(error) {
  if (error) {
    console.log("写入API文档服务基础信息---失败");
  } else {
    console.log("写入API文档服务基础信息---成功");
  }
});
// 读取文件
let doc_cmd = ` http-server ./apidoc -a ${ip} -p 19092 -s -o `;

// console.log('doc_cmd',doc_cmd);

fs.readFile("./package.json", function(error, data) {
  if (error) {
    console.log("读取文件失败了");
  } else {
    let package_json = JSON.parse(data.toString());

    package_json["scripts"]["start-docpage"] = doc_cmd;

    fs.writeFile("./package.json", JSON.stringify(package_json), function(
      error
    ) {
      if (error) {
        console.log("写入package.json---失败");
      } else {
        console.log("写入package.json---成功");
      }
    });
  }
});
