/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/frontend/client.routes.js
 * @Description    :
 */
const path = require("path");
module.exports = app => {
  var router = require("express").Router();

  // Create a new file
  /**
   * @api {post} /api/file  创建一个用户
   *@apiGroup 用户模块-- file
   *
   * @apiSuccess {Object} all 详细字段说明看 /api/file/fieldDescription
   */
  // router.post("/uploadimg", file.upload_img);

  app.use("/client", router);
};
