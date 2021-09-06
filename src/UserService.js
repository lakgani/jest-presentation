const axios = require("axios");

async function getAll() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}
module.exports = {
  getAll: getAll,
};
