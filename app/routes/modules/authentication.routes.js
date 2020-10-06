/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/turorial.routes.js
 * @Description    : 
 */
module.exports = app => {
  const authentication = require("../../controllers/authentication.controller.js");

  var router = require("express").Router();

  // Create a new Authentication
  /**
 * @api {post} /api/authentication  创建一个权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */
  router.post("/", authentication.create);

  // Retrieve all Authentications
    /**
 * @api {get} /api/authentication  查询所有权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */
  router.get("/", authentication.findAll);

  // Retrieve all published Authentications
    /**
 * @api {get} /api/authentication/published  查询所有已发布权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */  
  router.get("/published", authentication.findAllPublished);

// 返回 字段信息说明
    /**
 * @api {get} /api/authentication/fieldDescription  返回权限表字段信息说明
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */  
router.get("/fieldDescription",authentication.fieldDescription)

  // Retrieve a single Authentication with id
    /**
 * @api {get} /api/authentication/:id  查询单个权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */    
  router.get("/:id", authentication.findOne);

  // Update a Authentication with id
      /**
 * @api {put} /api/authentication/:id  修改单个权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */  
  router.put("/:id", authentication.update);

  // Delete a Authentication with id
      /**
 * @api {delete} /api/authentication/:id  删除单个权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */  
  router.delete("/:id", authentication.delete);

  // Create a new Authentication
      /**
 * @api {delete} /api/authentication  删除所有权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */  
  router.delete("/", authentication.deleteAll);


  app.use("/api/authentication", router);
};
