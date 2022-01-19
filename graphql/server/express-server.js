const express = require("express");
var { graphqlHTTP } = require("express-graphql");
var {
  buildSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

import { books, authors } from "./data";
// const schema = buildSchema(`
//     type Query {
//         hello : String
//     }
// `);

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "helloworld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "hello world",
      },
    }),
  }),
});
// const root = {
//   hello: () => {
//     return "hello world";
//   },
// };

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(" Running a graphql API server at http://localhost:4000/graphql");
});
