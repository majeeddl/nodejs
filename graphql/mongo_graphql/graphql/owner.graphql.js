
const {GraphQLObjectType,GraphQLString,GraphQLID,GraphQLInt}  = require('graphql');

const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});


module.exports.OwnerType= OwnerType