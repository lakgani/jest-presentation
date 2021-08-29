# Jest - Testing framework

A complete testing framework for JavaScript

---

* Test Runner
* Assertions
* Mocking
* Code-coverage

---

# Test Runner

What? Why?


```javascript
describe("add", function() {
    it("should add given numbers", function() {
        // Arrange

        // Act
        const result = add(1,2)

        // Assert
        expect(result).toBe(3)
    })
})
```

---

# Test Runner

* Describe/It
* Test

---

# Test Runner

* only
* skip
* todo

---

# Test Runner

* BeforeEach, AfterEach
* BeforeAll, AfterAll

---

# Assertions

Expect

* toBe
* toEqual
* toBeDefined/toBeUndefined
* toMatch
* not
* toContain
* toThrow
* resolves/rejects

---

# Mocks

* Spy
* Stub
* Mock

---

# Mocks

* Mock functions
* Mock timers

---

# Coverage

---

# Async testing

---

# Snapshot testing

---

# Useful config options
* watch
* watch-all
* verbose
* coverage
* testTimeout

---

# References

* Jest website - https://jestjs.io/