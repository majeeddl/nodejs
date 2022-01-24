const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const mongoose = require("mongoose");
const graphqlSchema = require("./graphql/schema.graphql");

mongoose
  .connect("mongodb://localhost/BookingDB", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo db connected ...");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 4009;

app.get("/", (req, res) => {
  res.send("Node js project is running ...");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    // rootValue: graphqlSchema.query,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Node server is started : ${port}`));
