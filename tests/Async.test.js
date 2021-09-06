const { fetchDataSuccess, fetchDataFailed } = require("../src/Async.js");

test("should showcase issue with async code", () => {
  fetchDataFailed().then((resp) => {
    expect(resp).toEqual("success");
  });
});

test("should showcase use of done", (done) => {
  fetchDataSuccess().then((resp) => {
    expect(resp).toEqual("success");
    done();
  });
});

test("should showcase use of expect assertions", () => {
  expect.assertions(1);
  fetchDataSuccess().then((resp) => {
    expect(resp).toEqual("success");
  });
});

test("should showcase use of returning promises", () => {
  return fetchDataSuccess().then((resp) => {
    expect(resp).toEqual("success");
  });
});

test("should showcase use of resolves/rejects", () => {
  return expect(fetchDataSuccess()).resolves.toBe("success");
});

test("should showcase use of async/await", async () => {
  const data = await fetchDataSuccess();

  expect(data).toBe("success");
});
