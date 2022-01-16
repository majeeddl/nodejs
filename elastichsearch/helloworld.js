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

  await client.index({
    index: "game-of-thrones",
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      character: "Daenerys Targaryen",
      quote: "I am the blood of the dragon.",
    },
  });

  await client.index({
    index: "game-of-thrones",
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      character: "Tyrion Lannister",
      quote: "A mind needs books like a sword needs a whetstone.",
    },
  });

  // Let's search!
  const { body } = await client.search({
    index: "game-of-thrones",
    body: {
      query: {
        match: { quote: "Winter" },
      },
    },
  });

  console.log(body);
  console.log(body.hits.hits)
};

run().catch(console.log);
