function CallMeLater(period = 0, callback) {
  setTimeout(() => {
    callback();
  }, period);
}

module.exports = CallMeLater;
