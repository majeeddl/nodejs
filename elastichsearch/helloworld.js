"use strict";

const client = require("./connection");

const run = async () => {
  await client.index({
    index: "game-of-thrones",
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      character: "Ned Stark",
      quote: "Winter is coming.",
    },
  });
};
