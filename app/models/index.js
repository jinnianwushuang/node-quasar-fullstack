/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/models/index.js
 * @Description    : 
 */
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorial = require("./modules/tutorial.model.js")(mongoose, mongoosePaginate);
db.author = require("./modules/author.model.js")(mongoose, mongoosePaginate);
db.artical = require("./modules/artical.model.js")(mongoose, mongoosePaginate);
db.authentication = require("./modules/authentication.model.js")(mongoose, mongoosePaginate);
db.user = require("./modules/user.model.js")(mongoose, mongoosePaginate);

module.exports = db;
