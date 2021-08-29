const add = require("../src/add");

describe("add", function () {
  it("should add given numbers", function () {
    // Arrange

    // Act
    const result = add(1, 2);

    // Assert
    expect(result).toBe(3);
  });

  it("should throw error for invalid inputs", function () {
    expect(() => {
      add(Number.POSITIVE_INFINITY, 2);
    }).toThrow();
  });
});
