/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/routes/modules/frontend/file.routes.js
 * @Description    : 
 */
const path = require('path')
module.exports = app => {
    const file = require("../../../controllers/file.controller.js");
  
    var router = require("express").Router();
  
    // Create a new file
    /**
   * @api {post} /api/file  创建一个用户
   *@apiGroup 用户模块-- file
   *
   * @apiSuccess {Object} all 详细字段说明看 /api/file/fieldDescription
   */
 


    router.get("/:time/:name",function(req,res,next){
      let file_path= path.normalize(__dirname+"./../../../img-upload/")
      let file_name = req.params.name;
      let time = req.params.time;

      let real_path = file_path +"/"+time+'/'+file_name;

      res.status(200)
          .sendFile(real_path,function(err){
            if(err){
              next(err)
            }else{
              
            }

          })


    })
  
 
  
    app.use("/file", router);
  };
  