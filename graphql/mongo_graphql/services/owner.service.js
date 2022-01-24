const { OwnerModel } = require("../models/owner.model");

const createOwner = async (param) => {
  const newOwner = new OwnerModel(param);
  return await newOwner.save();
};

const getOwner = async (id) => {
  return await OwnerModel.findById(id).exec();
};

const getOwners = async (query = {}) => {
  return await OwnerModel.find(query).exec();
};

module.exports.OwnerService = {
  createOwner,
  getOwner,
  getOwners,
};
