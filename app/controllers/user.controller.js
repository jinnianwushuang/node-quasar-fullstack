/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/controllers/user.controller.js
 * @Description    :
 */
const db = require("../models");
const User = db.user;
const User_description = require("../description/user.description");
const MESSAGE_CODE = require("../config/code.config");
const getPagination = (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? (page - 1) * limit : 0;

  return { limit, offset };
};
const logger=  require("log4js").getLogger()

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  // console.log("------jinnnian----");
  // console.log(req.body);
  if (!req.body.username) {
    res. send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法!"
    });
    return;
  }

  // Create a User
  const user = new User({
 
    username: req.body.username,
    password: req.body.password,
    description: req.body.description,
    authentication:req.body.authentication,
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "",
        data
      });
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: err.message || "服务器处理失败."
      });
    });
};

// Retrieve all user from the database.
exports.findAll = (req, res) => {
  const { page, size, username } = req.query;
  var condition = username
    ? { username: { $regex: new RegExp(username), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  User.paginate(condition, { offset, limit })
    .then(data => {
     
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "1",
        data: {
          total: data.totalDocs,
          data: data.docs,
          // totalPages: data.totalPages,
          currentPage: data.page,
          pageSize: data.limit
          // row_data:data
        }
      });
      logger.info({res, code: MESSAGE_CODE.SUCCESS, message: "1"})
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: err.message || "服务器处理失败."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.send({
          code: MESSAGE_CODE.ERROR_NOT_FOUND,
          message: "数据不存在 id " + id
        });
      else {
        res.send({
          code: MESSAGE_CODE.SUCCESS,
          message: "",
          data
        });
      }
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: "服务器处理失败 id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.send({
          code: MESSAGE_CODE.ERROR_NOT_FOUND,
          message: `数据不存在 id=${id} `
        });
      } else
        res.send({
          code: MESSAGE_CODE.SUCCESS,
          message: ""
        });
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: "服务器处理失败 id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.send({
          code: MESSAGE_CODE.ERROR_NOT_FOUND,
          message: `数据不存在 id=${id}.`
        });
      } else {
        res.send({
          code: MESSAGE_CODE.SUCCESS,
          message: ""
        });
      }
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: "服务器处理失败 id=" + id
      });
    });
};

// Delete all user from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: `删除成功,数量：${data.deletedCount} `
      });
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: err.message || "服务器处理失败."
      });
    });
};

// Find all published user
exports.findAllPublished = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  User.paginate({ published: true }, { offset, limit })
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "",
        date: {
          total: data.totalDocs,
          data: data.docs,
          // totalPages: data.totalPages,
          currentPage: data.page,
          pageSize: data.limit
        }
      });
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: err.message || "服务器处理失败."
      });
    });
};

// 返回字段信息说明

exports.fieldDescription = (req, res) => {
  res.send({
    code: MESSAGE_CODE.SUCCESS,
    message: "",
    data: {
      description: User_description.field_description
    }
  });
};
