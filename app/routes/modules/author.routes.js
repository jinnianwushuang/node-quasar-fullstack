/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/author.routes.js
 * @Description    : 
 */
module.exports = app => {
  const authors = require("../../controllers/author.controller.js");

  var router = require("express").Router();

  // Create a new Author
  /**
 * @api {post} /api/authors  创建一个作者
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */
  router.post("/", authors.create);

  // Retrieve all Authors
    /**
 * @api {get} /api/authors  查询所有作者
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */
  router.get("/", authors.findAll);

    /**
 * @api {get} /api/authors/findAllBySex  通过性别查询
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */  

  router.get("/findAllBySex",authors.findAllBySex)
 // 返回 字段信息说明
    /**
 * @api {get} /api/authors/fieldDescription  返回作者表字段信息说明
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */  
router.get("/fieldDescription",authors.fieldDescription)

  // Retrieve a single Author with id
    /**
 * @api {get} /api/authors/:id  查询单个作者
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */    
  router.get("/:id", authors.findOne);

  // Update a Author with id
      /**
 * @api {put} /api/authors/:id  修改单个作者
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */  
  router.put("/:id", authors.update);

  // Delete a Author with id
      /**
 * @api {delete} /api/authors/:id  删除单个作者
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */  
  router.delete("/:id", authors.delete);

  // Create a new Author
      /**
 * @api {delete} /api/authors  删除所有作者
 * @apiGroup 作者模块-- authors
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authors/fieldDescription
 */  
  router.delete("/", authors.deleteAll);

  app.use("/api/authors", router);
};
