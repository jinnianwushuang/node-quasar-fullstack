/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/server.js
 * @Description    : 
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

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

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jinnian application." });
});

// 注册所有路由
require("./app/routes/index")(app)

// set port, listen for requests
const PORT = process.env.serverport.trim() ;
const HOST = process.env.userhost.trim() ;
app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
