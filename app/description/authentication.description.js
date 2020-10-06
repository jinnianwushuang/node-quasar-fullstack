/*
 * @Date           : 2020-09-18 21:23:53
 * @FilePath       : /node-quasar-fullstack/app/description/authentication.description.js
 * @Description    : 
 */
module.exports = {
    schema_field:    {
        name: String,
        module:String,
        api_method:String,
        api_path:String,
        effective:Boolean,
        description: String,
       
      },
    field_description: {
        name: {
            type: "String",
            text: "权限名称",
            remark: ""
        },
        module: {
            type: "String",
            text: "权限模块",
            remark: ""
        },
        api_method: {
            type: "String",
            text: "api 方法",
            remark: ""
        },
        api_path: {
            type: "String",
            text: "API 路径",
            remark: ""
        },
 
        effective: {
            type: "Boolean",
            text: "是否起用",
            remark: "可能数： true : 已发布 ，false : 未发布"
        },
        description: {
            type: "String",
            text: "描述",
            remark: ""
        },
    }
};
