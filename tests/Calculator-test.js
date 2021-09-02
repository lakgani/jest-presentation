const Calculator = require("../src/Calculator");

let calc = new Calculator();

isEqual(calc.add(2, 3), 5, "should add provided params");
isEqual(calc.subtract(2, 3), -1, "should subract provided params");

function isEqual(actual, expected, testDetail) {
  if (actual !== expected) {
    console.error(`${testDetail}: ${actual} doesn't match with ${expected}`);
    return;
  }
  console.log(`${testDetail}: ✔`);
}
