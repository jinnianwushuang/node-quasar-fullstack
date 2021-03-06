/*
 * @Date           : 2021-05-13 22:22:40
 * @FilePath       : /node-quasar-fullstack/ip.js
 * @Description    :
 */

const os = require("os");
///获取本机ip///
function getIPAdress() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        alias.address.includes('192.168.0')&&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}
const IP = getIPAdress();
console.log('IP',  IP);

module.exports= IP
