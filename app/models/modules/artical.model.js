/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/models/modules/artical.model.js
 * @Description    : 
 */

module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      title:String,  // 长标题
      title_short:String, //短标题  
      description:String,// 标题下的描述
      show_date:Date,// 文章显示的 日期
      content:String,// 文章主要内容  ，富文本
      banner:String, //文章的大幅 主题图片

      type:String ,// 文章的主题类型
      active:String, //是否启用
      type_hot:String, // 文章是否是 其 同主题类型 相关的 文章  的 热门 文章   （单类轮播图）
      type_top:String,// 文章是否是  其 同主题类型 相关的 文章  的 置顶 文章     
      home_hot:String,// 文章是否是  所有的主题类型 相关的 文章  的 热门 文章   （首页轮播图） 
      home_top:String,// 文章是否是  所有的主题类型 相关的 文章  的 置顶 文章 


    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    object.updatedAt=Date.parse(object.updatedAt)
    object.createdAt=Date.parse(object.createdAt)
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Artical = mongoose.model("artical", schema);
  return Artical;
};
