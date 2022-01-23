const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const { books, author } = require("../data/data");


const authorType = new GraphQLObjectType({
  name : "Author",
  description : "This represents author of books",
  fields : ()=>({
    id : { type : new GraphQLNonNull(GraphQLString)},
    name : {type : new GraphQLNonNull(GraphQLString)}
  })
})

const bootType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const routeQuery = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    books: {
      type: new GraphQLList(bootType),
      description: "List of all books",
      resolve: () => books,
    },
    author : {
      type : new GraphQLList(authorType),
      description : "List of Authors",
      resolve : ()=> author
    }
  }),
});

const schema = new GraphQLSchema({
  query: routeQuery,
});

module.exports.schema = schema;
