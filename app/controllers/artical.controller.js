/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/controllers/artical.controller.js
 * @Description    :
 */
const db = require("../models");
const Artical = db.artical;

const MESSAGE_CODE = require("../config/code.config");
const file_controller= require("./file.controller")
const getPagination = (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? (page - 1) * limit : 0;

  return { limit, offset };
};

const logger = require("log4js").getLogger("category_console");
const logger_util = require("../util/logger.util.js");

// Create and Save a new Artical
exports.create = (req, res) => {
  // Validate request
  // console.log("------jinnnian----");
  // console.log(req.body);
  if (!req.body.title) {
    res.send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法"
    });

    return;
  }
  // let f_Obj= Artical.find({name:req.body.name })
  // console.log('req.body.name',req.body.name);
  // console.log(' f_Obj',f_Obj);
  // res.send({
  //   code: 6666,
  //   message: "名称重复",
  //   data:f_Obj
  // });

  Artical.paginate({  title: req.body. title }).then(data1 => {
    if (data1.totalDocs > 0) {
      res.send({
        code: MESSAGE_CODE.ERROR_ALREADY_EXIST,
        message: "名称重复"
      });
    } else {
      // Create a Artical

      const artical = new Artical({
        ...req.body
      });

      // Save Artical in the database
      artical
        .save(artical)
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
    }
  });
};

// Retrieve all Articals from the database.
exports.findAll = (req, res) => {
  const { page, size, name } = req.query;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Artical.paginate(condition, { offset, limit, sort: { updatedAt: -1 } })
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "",
        data: {
          total: data.totalDocs,
          data: data.docs,
          // totalPages: data.totalPages,
          currentPage: data.page,
          pageSize: data.limit
        }
      });
      // console.log('-----res');
      // console.log(res);
    })
    .catch(err => {
      let obj = {
        code: MESSAGE_CODE.ERROR_SERVER_WRONG,
        message: err.message || "服务器处理失败."
      };
      res.send(obj);
    });
};

// Find a single Artical with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Artical.findById(id)
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

// Update a Artical by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法!"
    });
  }

  const id = req.params.id;

  Artical.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

// Delete a Artical with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Artical.findByIdAndRemove(id, { useFindAndModify: false })
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

// Delete all Articals from the database.
exports.deleteAll = (req, res) => {
  Artical.deleteMany({})
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

// Find all Articals  By sex
exports.findAllBySex = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Artical.paginate({ sex: sex || 1 }, { offset, limit })
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "",
        data: {
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
      description: "人比较懒 ，暂时没写"
    }
  });
};

exports.fastMock = (req, res) => {
  let arr = [];
  let t = new Date().getTime();
  for (let i = 0; i < 200; i++) {
    let obj = {
      name: "作者" + i + "---" + t,

      age: Math.ceil(Math.random() * 120),
      sex: i % 2 == 0 ? 1 : 2,
      married: Math.random() > 0.5 ? true : false,
      nationality: "中国",
      hobby: "学习",
      description: `模拟数据${i}` + "---" + t,
      remark: "handsome"
    };
    arr.push(obj);
  }
  Artical.create(arr)
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "一共 模拟 新增 :" + arr.length,
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

// 上传图片 
exports.uploadimg=(req,res,next)=>{
return file_controller.upload_img( req,res,next)

}
