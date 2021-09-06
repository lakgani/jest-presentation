function fetchDataSuccess() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("success");
    }, 0);
  });
}

function fetchDataFailed() {
  return Promise.reject("fail");
}

module.exports = {
  fetchDataSuccess,
  fetchDataFailed,
};
