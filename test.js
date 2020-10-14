/*
 * @Date           : 2020-10-14 00:23:47
 * @FilePath       : /node-quasar-fullstack/test.js
 * @Description    : 
 */
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
    console.log('arr',arr);
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