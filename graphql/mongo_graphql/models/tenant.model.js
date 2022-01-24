const { Schema, model } = require("mongoose");

const tenantSchema = new Schema({
  name: String,
  surname: String,
  age: Number,
});

module.exports = model("Tenant", tenantSchema);
