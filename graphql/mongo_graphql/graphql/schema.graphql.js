const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const { OwnerController } = require("../controllers/owner.controller");
const { OwnerService } = require("../services/owner.service");

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

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  description: "This is for insert , update , and delete data",
  fields: {
    addOwner: {
      type: OwnerType,
      args: {
        name: { type: GraphQLString },
        surname: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        const newOwber = await OwnerService.createOwner(args);
        return newOwber;
      },
    },
  },
});

const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

module.exports = graphqlSchema;
