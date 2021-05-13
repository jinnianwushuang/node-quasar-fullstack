/*
 * @Date           : 2020-09-18 21:07:49
 * @FilePath       : /node-quasar-fullstack/app/routes/index.js
 * @Description    : 路由总入口文件
 */
module.exports= app=>{
    // 后台侧
    require("./modules/backend/turorial.routes")(app);
    require("./modules/backend/author.routes")(app);
    require("./modules/backend/artical.routes")(app);
    require("./modules/backend/user.routes")(app);
    require("./modules/backend/authentication.routes")(app);
    //前端测

    require("./modules/frontend/client.routes")(app);
    require("./modules/frontend/file.routes")(app);



}