---
# Quick intro to _Jest_

A ___complete___ testing framework for JavaScript.
---

# What does _complete_ mean?

- Test Runner
- Assertions
- Mocking
- Code-coverage

---

# Other alternatives

- Mocha (Chai, Sinon, Istanbul)
- Jasmine
- AVA

---

# Test Runner

- CLI.
- identify the test files to run.
- structure the tests
- report test execution status and results.
- option to watch files and rerun tests on file updates.

---

# Test Runner

## CLI

`npx jest`
---

# Test Runner

## Structure the tests

`node tests/Calculator-test.js`

### test/it

### describe

`npm run test calc`

---

# Test Runner

- only
- skip
- todo

`npm run test calc`
---

# Test Runner

- BeforeEach, AfterEach
- BeforeAll, AfterAll

`npm run test Conference`

---

# Assertions

Expect

- toBe
- toEqual
- toBeDefined/toBeUndefined
- not
- toMatch
- toContain
- toThrow
- resolves/rejects

`npm run test expect`

---

# Async testing

- `done()`
- `expect.assertions()`
- return promise
- resolves/rejects
- async/await

`npm run test async`
---

# Mocks

- Spy
- Mock
  - Timers

---

# Coverage

---

# Useful config options

- watch
- watch-all
- verbose
- coverage
- testTimeout

---

# References

- Jest website - https://jestjs.io/
