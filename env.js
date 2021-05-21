// module.exports = {
//   userhost: "192.168.0.36",
//   serverport: 19090,
//   webpageport: 20000,
//   apidocport: 19092,
//   s_url: "http://192.168.0.36:19090/",
//   a_url: "http://192.168.0.36:19092/",
//   w_url: "http://192.168.0.36:20000/"
// };
/*
 * @FilePath       : /node-quasar-fullstack/env.js
 * @Date           : 2020-11-18 15:07:55
 * @Description    :
 */
console.log(
  " -------------------我是在  env.js 内  读取 的  process.argv",
  process.argv
);
const IP = require("./ip.js");
let pargvs = process.argv;
// 通过命令行参数 判断是否是  生产 环境 还是 开发 环境
const is_prod = pargvs.includes("-prod");
const is_dev = !is_prod;
console.log("is_prod", is_prod);
console.log("is_dev", is_dev);
// 服务器端默认 0.0.0.0  找服务   ，本地开发使用本机IP 方便
let userhost = "0.0.0.0";
if (is_dev) {
  userhost = IP;
}
let serverport = 29090;
let webpageport = 29091;
let apidocport = 29093;
//   node     server.js     -prod  -sa 0.0.0.0   -sp  29090   -wp 29091
// 读取设置的参数
// 读取设置的 域名 或者 ip
let setted_userhost = pargvs.includes("-sa")
  ? (pargvs[pargvs.indexOf("-sa") + 1] + "").trim()
  : "";
userhost = setted_userhost || userhost;
let setted_serverport = pargvs.includes("-sa")
  ? (pargvs[pargvs.indexOf("-sp") + 1] + "").trim()
  : "";
serverport = setted_serverport || serverport;
let setted_webpageport = pargvs.includes("-wp")
  ? (pargvs[pargvs.indexOf("-wp") + 1] + "").trim()
  : "";
webpageport = setted_webpageport || webpageport;
// 计算其他的
let s_url = `http://${userhost}:${serverport}/`;
let w_url = `http://${userhost}:${webpageport}/`;
let a_url = `http://${userhost}:${apidocport}/`;
let prod_readme = ` <h1>欢迎来到 nodejs    jinnian 全栈    后台 项目。</h1>`;
let dev_readme = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>欢迎来到 nodejs jinnian 全栈 后台 项目</title>
    <link rel="icon" type="image/png" sizes="16x16" href="${w_url}/锦.png">
</head>
<body>
<h1>欢迎来到 nodejs   jinnian 全栈  后台 项目。</h1>
<p>本地开发   后台服务地址:  <a href="${s_url}"  >${s_url}</a>,</p>  
<p>本地开发   后台页面地址:  <a href="${w_url}"  >${w_url}</a> </p>   
<p>本地开发   API文档地址:   <a href="${a_url}"  >${a_url}</a></p>
<p>本地开发   前端页面地址:     暂时未集成到不在此项目内 </p>
<p> lan=zh-cn    lan=en-us  </p>
<p>本地开发   DB      :     jinnian_db </p> 
<p>本地开发   启动命令 :     npm start </p>
<P> linux找到端口进程  ：  netstat -apn | grep  29090</P>
<P> linux找到端口进程  ：   ps -ef | grep node </P>
<P> linux杀死进程  ： kill -9  pid</P>
<P>cd  /opt/project/jinnian-frontend   </P>
<P>cd  /opt/project/jinnian-backend    </P>
<P>cd   /opt/project/jinnian-server  </P>
<P>rm -rf  *  &&  cp ../spa.zip    ./ && unzip ./spa.zip  && rm -rf ./spa.zip && rm -rf ../spa.zip</P>
<P> nohup node server.js -demo -sa 0.0.0.0 -sp 19090 > /tmp/jinnian-server.log 2>&1 &  </P>
<P>exit </P>
<P>cd   /opt/project/ + 目录名字</P>
<P>rm -rf  * </P>
<P>cp ../spa.zip    ./</P>
<P>unzip ./spa.zip </P>
<P>rm -rf ./spa.zip</P>
<P>rm -rf ../spa.zip</P>
<p>
DB 配置文件路径  /opt/project/jinnian-server/app/config/db.config.js
</p>
<hr/>
<h3  style="color:red"> node  请使用12大版本   12.18 ，12.19 就都很OK 了。 服务器端命令必须设置 -sp 参数 </h3>
<P> 支持的 命令行参数: -prod 标识是线上实际对外运营项目    -sa   host地址(默认本地是本机IP，线上是0.0.0.0)      -sp  后台服务端口(默认   prod 29090)    -wp  后台页面端口(默认 29091)  </P>
<hr/>
<p> 线上运营 后台服务地址:   文件夹---------：   jinnian-server </p>
<p> 线上运营 后台页面地址:   文件夹---------：   jinnian-backend</p>
<p> 线上运营 前端页面地址:   文件夹---------：   jinnian-frontend</p>
<P> 线上运营 DB: jinnian_db_prod</P>
<p>服务端后台服务程序启动方式： cd    /opt/project/jinnian-server  目录内 ：</p>
<p>第一步   安装依赖：  npm i </p>
<p>第二步   全命令  ：  node     server.js     -prod  -sa 0.0.0.0   -sp  29090      $  </p>
<p>第二步   简单命令：  npm run  prod               </p>
<p>后期维护迭代，直接丢文件进去，不用重启 服务 </p>
<hr/>
<pre>
admin.jinnian.com      
www.jinnian.com      
screen -r node
node server.js  -prod -sa 0.0.0.0 -sp 29090
nohup node server.js  -prod -sa 0.0.0.0 -sp 29090 > /tmp/jinnian-server.log 2>&1 &
ps -ef | grep node
nohup node server.js  -prod -sa 0.0.0.0 -sp 29090  &
ps -ef | grep node
nohup node server.js  -prod -sa 0.0.0.0 -sp 29090 &
node server.js  -prod -sa 0.0.0.0 -sp 29090 
npm i
</pre>
<p>www.jinnian.com  ,运营前端页面内部需要调用服务器端，</p>
<hr/>
<p> nginx 需要配置代理如下</p>
<p> 服务器端： 线上运营 的 代理使用前缀 ： api     , 指向  指定的 -sp  端口 默认 29090 </p>
<div style="font-size:18px;">
<pre>
</pre>
</div>
</body>
</html>
  `;
module.exports = {
  IP,
  userhost,
  serverport,
  webpageport,
  apidocport,
  readme: is_dev ? dev_readme : prod_readme,
  s_url,
  w_url,
  a_url,
  is_prod,
  is_dev
};
