import express from "express";
import { getData } from "./data";
import { client } from "./database";

const app = express();

app.get("/", async (req, res) => {
  const db = await client.connect();

  try {
    await db.db("nodejs_mongodb").createCollection("stock", {
      timeseries: {
        timeField: "timestamp",
        metaField: "symbol",
        granularity: "minutes",
      },
    });
  } catch (err) {}

  const _getData = await getData();

  //   let _data: any = _getData[0];

  //   console.log(new Date(_data.unix * 1000));
  //   console.log(_data.date);

  //   const insertData = _getData.map((data) => {
  //     data["timestamp"] = new Date(data.unix * 1000);
  //     return data;
  //   });

  //   await db.db("nodejs_mongodb").collection("stock").insertMany(insertData);

  let aggregate = [
    {
      $match: {
        symbol: "BTC/USD",
      },
    },
    {
      $group: {
        _id: {
          symbol: "$symbol",
          time: {
            $dateTrunc: {
              date: "$time",
              unit: "minute",
              binSize: 5,
            },
          },
        },
        high: { $max: "$price" },
        low: { $min: "$price" },
        open: { $first: "$price" },
        close: { $last: "$price" },
      },
    },
    {
      $sort: {
        "_id.time": 1,
      },
    },
    {
      $project: {
        _id: 1,
        close: "$close",
        open: "$open",
        low: "$low",
        high: "$high",
      },
    },
  ];

  const result = db
    .db("nodejs_mongodb")
    .collection("stock")
    .aggregate(aggregate);

  for await (const doc of result) {
    console.log(doc);
  }

  //   console.log(result);

  await client.close();
  res.send("Mongo db express project");
});

const port = process.env.PORT || 4010;

app.listen(port, () => {
  console.log("Server is starting on port :", port);
});
