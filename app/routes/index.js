/*
 * @Date           : 2020-09-18 21:07:49
 * @FilePath       : /node-quasar-fullstack/app/routes/index.js
 * @Description    : 路由总入口文件
 */
module.exports= app=>{
    require("./modules/turorial.routes")(app);
    require("./modules/author.routes")(app);
    require("./modules/artical.routes")(app);
    require("./modules/user.routes")(app);
    require("./modules/authentication.routes")(app);



}