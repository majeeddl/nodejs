var csv = require("csvtojson");

// Convert a csv file with csvtojson

const getData = async () => {
  let jsonArrayObj = await csv().fromFile("./data.csv");

  return jsonArrayObj
};

export { getData };
