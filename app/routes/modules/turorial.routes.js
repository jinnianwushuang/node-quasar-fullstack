/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/turorial.routes.js
 * @Description    : 
 */
module.exports = app => {
  const tutorials = require("../../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  /**
 * @api {post} /api/tutorials  创建一个教程
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
    /**
 * @api {get} /api/tutorials  查询所有教程
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
    /**
 * @api {get} /api/tutorials/published  查询所有已发布教程
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */  
  router.get("/published", tutorials.findAllPublished);

// 返回 字段信息说明
    /**
 * @api {get} /api/tutorials/fieldDescription  返回教程表字段信息说明
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */  
router.get("/fieldDescription",tutorials.fieldDescription)

  // Retrieve a single Tutorial with id
    /**
 * @api {get} /api/tutorials/:id  查询单个教程
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */    
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
      /**
 * @api {put} /api/tutorials/:id  修改单个教程
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */  
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
      /**
 * @api {delete} /api/tutorials/:id  删除单个教程
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */  
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
      /**
 * @api {delete} /api/tutorials  删除所有教程
 *@apiGroup 教程模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/tutorials/fieldDescription
 */  
  router.delete("/", tutorials.deleteAll);


  app.use("/api/tutorials", router);
};
