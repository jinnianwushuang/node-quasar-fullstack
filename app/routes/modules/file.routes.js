/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/file.routes.js
 * @Description    : 
 */
module.exports = app => {
    const file = require("../../controllers/file.controller.js");
  
    var router = require("express").Router();
  
    // Create a new file
    /**
   * @api {post} /api/file  创建一个用户
   *@apiGroup 用户模块-- file
   *
   * @apiSuccess {Object} all 详细字段说明看 /api/file/fieldDescription
   */
    router.post("/uploadimg", file.upload_img);
  
 
  
    app.use("/api/file", router);
  };
  