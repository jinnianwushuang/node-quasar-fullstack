/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/authentication.routes.js
 * @Description    : 
 */
module.exports = app => {
  const authentication = require("../../../controllers/authentication.controller.js");

  var router = require("express").Router();

  // Create a new Authentication
  /**
 * @api {post} /api/authentication  创建一个权限
 *@apiGroup 权限模块-- authentication
 *
 * @apiSuccess {Object} all 详细字段说明看 /api/authentication/fieldDescription
 */
  router.post("", authentication.login);

  


  app.use("/api/login", router);
};
