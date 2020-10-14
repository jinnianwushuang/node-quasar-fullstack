/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/author.routes.js
 * @Description    : 
 */
module.exports = app => {
  const author = require("../../controllers/author.controller.js");

  var router = require("express").Router();

  // Create a new Author
  /**
 * @api {post} /api/author  创建一个作者
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */
  router.post("/", author.create);

  // Retrieve all author
    /**
 * @api {get} /api/author  查询所有作者
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */
  router.get("/", author.findAll);

    /**
 * @api {get} /api/author/findAllBySex  通过性别查询
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */  

  router.get("/findAllBySex",author.findAllBySex)
 // 返回 字段信息说明
    /**
 * @api {get} /api/author/fieldDescription  返回作者表字段信息说明
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */  
router.get("/fieldDescription",author.fieldDescription)


    /**
 * @api {get} /api/author/fastMock  一键模拟数据
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */    


router.get("/fastMock",author.fastMock)

  // Retrieve a single Author with id
    /**
 * @api {get} /api/author/:id  查询单个作者
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */    
  router.get("/:id", author.findOne);

  // Update a Author with id
      /**
 * @api {put} /api/author/:id  修改单个作者
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */  
  router.put("/:id", author.update);

  // Delete a Author with id
      /**
 * @api {delete} /api/author/:id  删除单个作者
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */  
  router.delete("/:id", author.delete);

  // Create a new Author
      /**
 * @api {delete} /api/author  删除所有作者
 * @apiGroup 作者模块-- author
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/author/fieldDescription
 */  
  router.delete("/", author.deleteAll);

  app.use("/api/author", router);
};
