/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/artical.routes.js
 * @Description    : 
 */
module.exports = app => {
  const artical = require("../../controllers/artical.controller.js");

  var router = require("express").Router();

  // Create a new Artical
  /**
 * @api {post} /api/artical  创建一个文章
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */
  router.post("/", artical.create);

  // Retrieve all artical
    /**
 * @api {get} /api/artical  查询所有文章
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */
  router.get("/", artical.findAll);

    /**
 * @api {get} /api/artical/findAllBySex  通过性别查询
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */  

  router.get("/findAllBySex",artical.findAllBySex)
 // 返回 字段信息说明
    /**
 * @api {get} /api/artical/fieldDescription  返回文章表字段信息说明
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */  
router.get("/fieldDescription",artical.fieldDescription)


    /**
 * @api {get} /api/artical/fastMock  一键模拟数据
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */    


router.get("/fastMock",artical.fastMock)

  // Retrieve a single Artical with id
    /**
 * @api {get} /api/artical/:id  查询单个文章
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */    
  router.get("/:id", artical.findOne);

  // Update a Artical with id
      /**
 * @api {put} /api/artical/:id  修改单个文章
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */  
  router.put("/:id", artical.update);

  // Delete a Artical with id
      /**
 * @api {delete} /api/artical/:id  删除单个文章
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */  
  router.delete("/:id", artical.delete);

  // Create a new Artical
      /**
 * @api {delete} /api/artical  删除所有文章
 * @apiGroup 文章模块-- artical
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/artical/fieldDescription
 */  
  router.delete("/", artical.deleteAll);

  app.use("/api/artical", router);
};
