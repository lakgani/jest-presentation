const axios = require("axios");

const callMeNTimes = require("../src/CallMeNTimes");
const UserService = require("../src/UserService");
const callMeLater = require("../src/CallMeLater");

jest.mock("axios");

test("should show usage of spies", () => {
  const spy = jest.fn();

  callMeNTimes(20, spy);

  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls.length).toBe(20);
  expect(spy.mock.calls[0][0]).toBe(0);
  expect(spy.mock.calls[19][0]).toBe(19);
});

test("should fetch mocked users", async () => {
  const mockedUsers = [
    {
      name: "Alex",
    },
  ];
  const mockedResponse = {
    data: mockedUsers,
  };
  axios.get.mockResolvedValue(mockedResponse);

  const users = await UserService.getAll();
  expect(users).toEqual(mockedUsers);
});

test("should show issue with timer based code testing", (done) => {
  const spy = jest.fn();

  callMeLater(1000, spy);

  setTimeout(() => {
    expect(spy).toHaveBeenCalled();
    done();
  }, 1000);
});

test("should show usage of fake timers", () => {
  const spy = jest.fn();
  jest.useFakeTimers();
  callMeLater(2000, spy);
  jest.advanceTimersByTime(2000);
  expect(spy).toHaveBeenCalled();
});

afterEach(() => {
  jest.useRealTimers();
});
