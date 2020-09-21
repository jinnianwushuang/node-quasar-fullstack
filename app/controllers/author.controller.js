/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/controllers/author.controller.js
 * @Description    :
 */
const db = require("../models");
const Author = db.authors;
const Author_description = require("../description/author.description");
const MESSAGE_CODE = require("../config/code.config");
const getPagination = (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? (page - 1) * limit : 0;

  return { limit, offset };
};

// Create and Save a new Author
exports.create = (req, res) => {
  // Validate request
  // console.log("------jinnnian----");
  // console.log(req.body);
  if (!req.body.name) {
    res.send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法"
    });

    return;
  }

  // Create a Author
  const author = new Author({
    name: req.body.name,
    age: req.body.age || 18,
    sex: req.body.sex,
    married: req.body.married,
    nationality: req.body.nationality || "中国",
    address: req.body.address,
    tel: req.body.tel,
    hobby: req.body.hobby,
    description: req.body.description,
    remark: req.body.remark
  });

  // Save Author in the database
  author
    .save(author)
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

// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
  const { page, size, name } = req.query;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Author.paginate(condition, { offset, limit })
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "",
        data: {
          total: data.totalDocs,
          authors: data.docs,
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

// Find a single Author with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Author.findById(id)
    .then(data => {
      if (!data)
        res.send({
          code: MESSAGE_CODE.ERROR_NOT_FOUND,
          message: "不存在此数据 id " + id
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

// Update a Author by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法!"
    });
  }

  const id = req.params.id;

  Author.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.send({
          code: MESSAGE_CODE.ERROR_NOT_FOUND,
          message: `数据不存在 id=${id}. `
        });
      } else {
        res.send({
          code: MESSAGE_CODE.SUCCESS,
          message: "数据处理成功"
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

// Delete a Author with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Author.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.send({
          code: MESSAGE_CODE.ERROR_NOT_FOUND,
          message: `数据不存在 id=${id}.  `
        });
      } else {
        res.send({
          code: MESSAGE_CODE.SUCCESS,
          message: "数据处理成功!"
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

// Delete all Authors from the database.
exports.deleteAll = (req, res) => {
  Author.deleteMany({})
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: `删除数据成功，数量： ${data.deletedCount} !`
      });
    })
    .catch(err => {
      res.send({
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: err.message || "服务器处理失败."
      });
    });
};

// Find all Authors  By sex
exports.findAllBySex = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Author.paginate({ sex: sex || 1 }, { offset, limit })
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "",
        data: {
          total: data.totalDocs,
          authors: data.docs,
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
      description: Author_description.field_description
    }
  });
};
