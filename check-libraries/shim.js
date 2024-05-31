const axios = require("axios");

module.exports = async function performNetworkRequest(url) {
  try {
    const response = await axios.get(url);
    return { data: response.data, status: response.status };
  } catch (error) {
    return { error: error.message };
  }
};
