function callMeNTimes(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
}

module.exports = callMeNTimes;
