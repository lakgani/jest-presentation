const Calculator = require("../src/Calculator");

// test('add should add provided numbers', () => {
//     expect(add(1,2)).toBe(3);
// })

// test('add should throw error if any parameter is not a number', () => {
//     expect(() => {
//         add(1, "1")
//     }).toThrowError(InvalidParametersError);
// })

// test('subtract should subtract provided numbers', () => {
//     expect(subtract(1,2)).toBe(-1);
// })

// test('subtract should throw error if any parameter is not a number', () => {
//     expect(() => {
//         subtract(1, "1")
//     }).toThrowError(InvalidParametersError);
// })

let calc;

beforeAll(() => {
  calc = new Calculator();
  // console.log("Runs before calculator section")
});

afterAll(() => {
  // console.log("Runs after calculator section")
});

describe("calculator", () => {
  describe("add", () => {
    test("should add provided numbers", () => {
      expect(calc.add(1, 2)).toBe(3);
    });

    test("should throw error if any parameter is not a number", () => {
      expect(() => {
        calc.add(1, "1");
      }).toThrow(Calculator.InvalidParametersError);
    });
    // test.todo("should multiply provided numbers");
    // test.todo("should throw error if any parameter is not number");
  });

  describe("subtract", () => {
    test("should subtract provided numbers", () => {
      expect(calc.subtract(1, 2)).toBe(-1);
    });

    test("should throw error if any parameter is not a number", () => {
      expect(() => {
        calc.subtract(1, "1");
      }).toThrow(Calculator.InvalidParametersError);
    });
  });
});
