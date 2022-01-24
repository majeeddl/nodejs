const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const placeSchema = new Schema({
  title: String,
  city: String,
  ownerId: ObjectId,
  tenantId: ObjectId,
});

module.exports = model("Place", placeSchema);
P;
