/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/server.js
 * @Description    : 
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const env_config =require('./env.js')
var colors = require('colors/safe');
const logger_formart= require("./app/util/logger.util.js")
var corsOptions = {
  // origin: "http://localhost:8081"
  function (origin, callback) {
    callback(null, true)
    // if (whitelist.indexOf(origin) !== -1) {
    //   callback(null, true)
    // } else {
    //   callback(new Error('Not allowed by CORS'))
    // }
  }
};



// appenders  输出源配置  categories  输出类别  
const log4js = require("log4js");
log4js.addLayout('myjson', function(config) {
 
  return function(logEvent) { 
    // console.log(logEvent);

    return logger_formart(logEvent,config)

  }
});
log4js.configure({
  appenders: {
    everything: { type: 'dateFile', filename: './log/server.log' ,layout:{
      type:'myjson',
      separator:","
    }},
    console_debug: { type: 'dateFile', filename: './log/server.log' ,layout:{
      type:'myjson',
      separator:","
    }},


  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug' },
    category_console: { appenders: [ 'console_debug' ], level: 'debug' }
  }
});
// , format: (req, res, format) =>format(`:method :url  :status  :response-time ms ${res.reqUserId}`)

const logger = log4js.getLogger()
//ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
// 级别 > INFO 的日志才会被打印
logger.level = "debug"
// 日志的级别是 WARN 
// app.use( log4js.connectLogger(logger, {level: 'debug'}) );
// logger.info('sssssssssssssss------' )


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


  app.all('*',function(res,req,next){
    logger.info(req)
    // logger.info(res)
   next() 

  })
// simple route
app.get("/", (req, res) => {
  // res.json({ message: "Welcome to jinnian application." });

  let str=`
  <h1>欢迎来到錦年node全栈学习项目</h1>
  <p>后台服务地址：<a href="${env_config.s_url}">${env_config.s_url}</a> </p>
  <p>前端服务地址：<a href="${env_config.w_url}">${env_config.w_url}</a> </p>
  <p>API文档地址：<a href="${env_config.a_url}">${env_config.a_url}</a> </p>
  <p>有问题联系----jinnian </p>
  <p></p>
  `
  
  res.send(str)
});

// 注册所有路由
require("./app/routes/index")(app)

// set port, listen for requests
const PORT =  env_config.serverport  ;
const HOST = env_config.userhost  ;
app.listen(PORT,HOST, () => {
  console.log(colors.yellow(`Server is running on http://${HOST}:${PORT}`));
});
