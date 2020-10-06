/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/models/modules/authentication.model.js
 * @Description    : 
 */
const Authentication_description = require("../../description/authentication.description")
module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    Authentication_description.schema_field,
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Authentication = mongoose.model("authentication", schema);
  return Authentication;
};
