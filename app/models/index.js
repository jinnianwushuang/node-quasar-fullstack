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
db.tutorials = require("./modules/tutorial.model.js")(mongoose, mongoosePaginate);
db.authors = require("./modules/author.model.js")(mongoose, mongoosePaginate);

module.exports = db;
