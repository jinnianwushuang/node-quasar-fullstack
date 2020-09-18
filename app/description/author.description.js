/*
 * @Date           : 2020-09-18 21:23:53
 * @FilePath       : /node-quasar-fullstack/app/description/author.description.js
 * @Description    : 
 */
module.exports = {
    schema_field:    {
        name: String,
        age: Number,
        sex: Number,
        married:Boolean,
        nationality:String,
        address:String,
        tel:Number,
        hobby:String,
        description:String,
        remark:String

      },
    field_description: {
        name: { type: "String", text: "姓名", remark: "" },
        age: { type: "Number", text: "年龄", remark: "1-150 之间 整数" },
        sex: { type: "Number", text: "性别", remark: "1：男性，2：女性" },
        married: { type: "Boolean", text: "婚否", remark: "true: 已婚 ，false:未婚" },
        nationality: { type: "String", text: "国籍", remark: "默认中国" },
        address: { type: "String", text: "地址", remark: "" },
        tel:{ type: "Number", text: "联系电话", remark: "" },
        hobby: { type: "String", text: "兴趣爱好", remark: "" },
        description: { type: "String", text: "描述", remark: "" },
        remark: { type: "String", text: "备注", remark: "" },
       
    }
};
