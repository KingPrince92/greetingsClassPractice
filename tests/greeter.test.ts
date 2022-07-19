import { Greeter } from "../src/greeter";

describe("the Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Hello");
    const result = greeter.greeting;
    expect(result).toBe("Hello");
  });
  test("the greet function correctly works", () => {
    const greeter = new Greeter("Hello");
    const result = greeter.greet("Jennifer");
    expect(result).toBe("Hello, Jennifer!");
  });
  test("the greet function with alternative name and greeting", () => {
    const greeter = new Greeter("What's up");
    const result = greeter.greet("Bobby");
    expect(result).toBe("What's up, Bobby!");
  });
});
