function fetchDataSuccess() {
  return Promise.resolve("success");
}

function fetchDataFailed() {
  return Promise.reject("fail");
}

module.exports = {
  fetchDataSuccess,
  fetchDataFailed,
};
