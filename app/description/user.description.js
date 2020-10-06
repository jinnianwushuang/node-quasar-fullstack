/*
 * @Date           : 2020-09-18 21:23:53
 * @FilePath       : /node-quasar-fullstack/app/description/user.description.js
 * @Description    : 
 */
module.exports = {
    schema_field:    {
        username: String,
        password: String,
        description: String,
        authentication:Array
      },
    field_description: {
        username: {
            type: "String",
            text: "标题",
            remark: ""
        },

        password: {
            type: "String",
            text: "是否发布",
            remark: ""
        },
        description: {
            type: "String",
            text: "描述",
            remark: ""
        },
        authentication: {
            type: "Array",
            text: "描述",
            remark: ""
        },
    }
};
