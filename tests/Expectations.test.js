test("toBe usage", () => {
  const number = 10;
  const str = "Hello World";
  const obj = {
    first: "first",
    second: "second",
  };

  expect(number).toBe(10);
  expect(str).toBe("Hello World");
  // expect(obj).toBe({
  //     first: "first",
  //     second: "second"
  // })
});

test("toEqual usage", () => {
  const obj = {
    first: "first",
    second: {
      third: "third",
    },
  };
  const arr = [1, 2, 3];

  expect(obj).toEqual({
    first: "first",
    second: {
      third: "third",
    },
  });
  expect(arr).toEqual([1, 2, 3]);
});

test("toBeDefine/toBeUndefined usage", () => {
  const defined = 40;
  let notDefined;

  expect(defined).toBeDefined();
  expect(notDefined).toBeUndefined();
});

test("not usage", () => {
  const a = 20;

  expect(a).not.toBeUndefined();
  expect(a).not.toBeNull();
});

test("toMatch usage", () => {
  const message = "A long message for user Alex";

  expect(message).toMatch("Alex");
  expect(message).toMatch(/Alex$/);
});

test("toContain usage", () => {
  const arr = [1, 2, 3];

  expect(arr).toContain(3);
});

test("toThrow usage", () => {
  expect(() => {
    throw new Error("something happened");
  }).toThrow("something");
});

test("resolves/rejects usage", () => {
  expect(Promise.resolve("success")).resolves.toBe("success");
  // expect(Promise.reject("failure")).rejects.toBe("success");
});
