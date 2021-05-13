/*
 * @Date           : 2020-09-10 19:17:28
 * @FilePath       : /node-quasar-fullstack/server.js
 * @description    :
 */
const colors = require("colors/safe");
console.log(
  colors.yellow(
    "--------------------- 后台 项目  server.js 启动 ----------------------"
  )
);
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const env_config = require("./env.js");
// appenders  输出源配置  categories  输出类别
const log4js = require("log4js");
const format_log = require("./app/util/logger.util.js");
const db = require("./app/models/index.js");
const dbConfig = require("./app/config/db.config.js");
const authenticate_controller = require("./app/controllers/authentication.controller.js");
log4js.addLayout("myjson", function (config) {
  // console.log( config);
  return function (logEvent) {
    return format_log(logEvent, config);
  };
});
log4js.configure({
  appenders: {
    everything: {
      type: "dateFile",
      filename: "./log/server.log",
      layout: { type: "myjson", separator: "," },
    },
    connectLogger: { type: "dateFile", filename: "./log/connectLogger.log" },
  },
  categories: {
    default: { appenders: ["everything"], level: "debug" },
    connectLogger: {
      appenders: ["connectLogger"],
      level: "debug",
    },
  },
});
const logger = log4js.getLogger();
//ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
// 级别 > INFO 的日志才会被打印
logger.level = "debug";
// 日志的级别是 WARN
// app.use( log4js.connectLogger(logger, {level: 'debug'}) );
// logger.info('sssssssssssssss------' )
// var whitelist = ['http://192.168.237.1:29091', 'http://localhost:29091']
var corsOptions = {
  // origin: "*",
  //  origin: true,
  origin: function (origin, callback) {
    callback(null, true);
    // if (whitelist.indexOf(origin) !== -1) {
    //   callback(null, true)
    // } else {
    //   callback(new Error('Not allowed by CORS'))
    // }
  },
};
app.use(cors(corsOptions));
// app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
let db_url = dbConfig.url;
if (env_config.is_prod) {
  db_url = dbConfig.url_remote_prod;
}
db.mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.send(env_config.readme);
  // res.send('./serverpage/200.html')
});
// 路由拦截 ，日志记录
app.all("*", function (req, res, next) {
  // console.log('// 路由拦截 ，日志记录')
  // console.log("link-id");
  // console.log(req);
  let check = authenticate_controller.check_authenticate(req, res);
  if (check) {
    next();
  } else {
    res.send({
      code: 445566,
      message: "登录信息失效，请从新登录！",
    });
  }
  logger.info(req);
  logger.info(res);
  // pass control to the next handler
  // next();
});
// 注册所有模块的  路由
require("./app/routes/index.js")(app);
// require("./app/routes/module/turorial.routes.js")(app);
// require("./app/routes/module/author.routes.js")(app);
// set port, listen for requests
let PORT = env_config.serverport;
let HOST = env_config.userhost;
app.listen(PORT, HOST, () => {
  console.log(colors.yellow(`后台服务 地址：    http://${HOST}:${PORT}  `));
});