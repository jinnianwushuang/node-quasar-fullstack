/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/models/modules/user.model.js
 * @Description    : 
 */
const User_description = require("../../description/user.description")
module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    User_description.schema_field,
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const User = mongoose.model("user", schema);
  return User;
};
