/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/turorial.routes.js
 * @Description    : 
 */
module.exports = app => {
  const tutorial = require("../../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  /**
 * @api {post} /api/tutorial  创建一个教程
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */
  router.post("/", tutorial.create);

  // Retrieve all tutorial
    /**
 * @api {get} /api/tutorial  查询所有教程
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */
  router.get("/", tutorial.findAll);

  // Retrieve all published tutorial
    /**
 * @api {get} /api/tutorial/published  查询所有已发布教程
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */  
  router.get("/published", tutorial.findAllPublished);

// 返回 字段信息说明
    /**
 * @api {get} /api/tutorial/fieldDescription  返回教程表字段信息说明
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */  
router.get("/fieldDescription",tutorial.fieldDescription)


    /**
 * @api {get} /api/tutorial/fastMock  快速模拟数据
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */  
router.get("/fastMock",tutorial.fastMock)






  // Retrieve a single Tutorial with id
    /**
 * @api {get} /api/tutorial/:id  查询单个教程
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */    
  router.get("/:id", tutorial.findOne);

  // Update a Tutorial with id
      /**
 * @api {put} /api/tutorial/:id  修改单个教程
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */  
  router.put("/:id", tutorial.update);

  // Delete a Tutorial with id
      /**
 * @api {delete} /api/tutorial/:id  删除单个教程
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */  
  router.delete("/:id", tutorial.delete);

  // Create a new Tutorial
      /**
 * @api {delete} /api/tutorial  删除所有教程
 *@apiGroup 教程模块-- tutorial
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorial/fieldDescription
 */  
  router.delete("/", tutorial.deleteAll);


  app.use("/api/tutorial", router);
};
