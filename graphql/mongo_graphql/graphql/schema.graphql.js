const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require("graphql");
const { OwnerController } = require("../controllers/owner.controller");

const { OwnerType } = require("./owner.graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    owners: {
      type: new GraphQLList(OwnerType),
      async resolve(parent, args) {
        return await OwnerController.getOwners();
      },
    },
  },
});


const Mutations = new Gra

const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = graphqlSchema;
