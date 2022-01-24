const { OwnerService } = require("../services/owner.service")



const getOwner = async (req,res,next)=>{
    const id = req.params === undefined ? req.id : req.params.id;
    const owner = await OwnerService.getOwner(id);
    return owner
}

const getOwners = async (req, res, next) => {
  const owners = await OwnerService.getOwners({});
  return owners;
};


module.exports.OwnerController = {
    getOwner,
    getOwners
}