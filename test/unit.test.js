// formUtils.test.js
const { isFormValid } = require('../logic');

describe("Form Validation", () => {
  test("valid input should pass", () => {
    expect(isFormValid("Shwe", "Burger", 2, "Chennai")).toBe(true);
  });

  test("empty name should fail", () => {
    expect(isFormValid("", "Burger", 2, "Chennai")).toBe(false);
  });

  test("zero quantity should fail", () => {
    expect(isFormValid("Shwez", "Burger", 0, "Chennai")).toBe(false);
  });

  test("empty address should fail", () => {
    expect(isFormValid("Shwe", "Burger", 2, "")).toBe(false);
  });
});
