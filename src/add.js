function add(x, y) {
  if (!Number.isFinite(x)) {
    throw new Error("Invalid value");
    return 0;
  }
  return x + y;
}

module.exports = add;
