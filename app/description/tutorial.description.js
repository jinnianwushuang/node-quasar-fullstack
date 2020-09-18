/*
 * @Date           : 2020-09-18 21:23:53
 * @FilePath       : /node-quasar-fullstack/app/description/tutorial.description.js
 * @Description    : 
 */
module.exports = {
    schema_field:    {
        title: String,
        description: String,
        published: Boolean
      },
    field_description: {
        title: {
            type: "String",
            text: "标题",
            remark: ""
        },
        description: {
            type: "String",
            text: "描述",
            remark: ""
        },
        published: {
            type: "Boolean",
            text: "是否发布",
            remark: "可能数： true : 已发布 ，false : 未发布"
        },
    }
};
