/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/turorial.routes.js
 * @Description    : 
 */
module.exports = app => {
  const user = require("../../../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  /**
 * @api {post} /api/user  创建一个用户
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */
  router.post("/", user.create);

  // Retrieve all user
    /**
 * @api {get} /api/user  查询所有用户
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */
  router.get("/", user.findAll);

  // Retrieve all published user
    /**
 * @api {get} /api/user/published  查询所有已发布用户
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */  
  router.get("/published", user.findAllPublished);

// 返回 字段信息说明
    /**
 * @api {get} /api/user/fieldDescription  返回用户表字段信息说明
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */  
router.get("/fieldDescription",user.fieldDescription)

  // Retrieve a single user with id
    /**
 * @api {get} /api/user/:id  查询单个用户
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */    
  router.get("/:id", user.findOne);

  // Update a user with id
      /**
 * @api {put} /api/user/:id  修改单个用户
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */  
  router.put("/:id", user.update);

  // Delete a user with id
      /**
 * @api {delete} /api/user/:id  删除单个用户
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */  
  router.delete("/:id", user.delete);

  // Create a new user
      /**
 * @api {delete} /api/user  删除所有用户
 *@apiGroup 用户模块-- user
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/user/fieldDescription
 */  
  router.delete("/", user.deleteAll);


  app.use("/api/user", router);
};
