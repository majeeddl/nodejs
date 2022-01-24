const { Schema, model } = require("mongoose");

const ownerSchema = new Schema({
  name: String,
  surname: String,
  age: Number,
});

module.exports.OwnerModel = model("Owner", ownerSchema);
