/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/controllers/tutorial.controller.js
 * @Description    :
 */
const db = require("../models");
const Tutorial = db.tutorial;
const Tutorial_description = require("../description/tutorial.description");
const MESSAGE_CODE = require("../config/code.config");
const file_controller= require("./file.controller")
const { tutorial } = require("../models");
const getPagination = (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? (page - 1) * limit : 0;

  return { limit, offset };
};
const logger=  require("log4js").getLogger()

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // console.log("------jinnnian----");
  // console.log(req.body);
  if (!req.body.title) {
    res. send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法!"
    });
    return;
  }
  Tutorial.paginate({title:req.body.title }).then(data1=>{

    if(data1.totalDocs>0){
    
      res.send({
        code: MESSAGE_CODE.ERROR_ALREADY_EXIST,
        message: "名称重复"
        
      });
    }else{
 // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
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
  })
 
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Tutorial.paginate(condition, { offset, limit,sort:{ updatedAt: -1 } })
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.send({
      code: MESSAGE_CODE.ERROR_PARAMETER_WRONG,
      message: "参数非法!"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id, { useFindAndModify: false })
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

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
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

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Tutorial.paginate({ published: true }, { offset, limit })
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
      description: Tutorial_description.field_description
    }
  });
};

// 根据传入数量快速mock 数据
exports.fastMockData = (req, res) => {
  const { num } = req.query;
};


exports.fastMock=(req,res)=>{
  let arr=[]
  let t=new Date().getTime()
  for (let i = 0; i < 200; i++) {
   
    let obj = {
   

      title: "标题" + i+'---'+t,
      published:  Math.random() > 0.5 ? true : false,

      description: `模拟数据${i}`+'---'+t,
    
    };
  arr.push(obj)
  }
  tutorial
    .create(arr)
    .then(data => {
      res.send({
        code: MESSAGE_CODE.SUCCESS,
        message: "一共 模拟 新增 :"+ arr.length,
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

// 上传图片 
exports.uploading=(req,res,next)=>{
  return file_controller.upload_img( req,res,next)
  
  }
  
