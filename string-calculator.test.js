const StringCalculator = require("./string-calculator");

describe("StringCalculator class", () => {
  describe("Initialize", () => {
    test("it can be initialized", () => {
      const stringCalculator = new StringCalculator();
      expect(stringCalculator).toBeDefined();
    });
  });
  describe("method 'add'", () => {
    const stringCalculator = new StringCalculator();
    test("given an empty string, it returns 0", () => {
      expect(stringCalculator.add("")).toEqual(0);
    });
    test("given a single number as a string, it returns that string as a number", () => {
      expect(stringCalculator.add("1")).toEqual(1);
    });
    test("given 2 numbers as a string, it returns the sum of those 2 numbers", () => {
      expect(stringCalculator.add("1,2")).toEqual(3);
    });
    test("given an unknown amount of numbers, it returns the sum of those numbers", () => {
      // expect(stringCalculator.add('1,2,3')).toEqual(6);
      expect(stringCalculator.add("1,2,3,4")).toEqual(10);
    });
    test("it can support newlines as delimiters", () => {
      expect(stringCalculator.add("1\n2,3")).toEqual(6);
    });
    test("if string contains a negative number, an error will be thrown containing that number", () => {
      expect(() => stringCalculator.add("1, -1")).toThrow(
        "negatives not allowed: -1"
      );
    });
    test("if string contains multiple negative numbers, error will contain them all", () => {
      expect(() => stringCalculator.add("1, -1, 2, -2")).toThrow(
        "negatives not allowed: -1,-2"
      );
    });
  });
});
