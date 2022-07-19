import { LoudGreeter } from "../src/loudgreeter";

describe("the LoudGreeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new LoudGreeter("Hello");
    const result = greeter.greeting;
    expect(result).toBe("Hello");
  });
  test("the greet function has successfully been overridden", () => {
    const greeter = new LoudGreeter("Hello");
    const result = greeter.greet("Sam");
    expect(result).toBe("Hello, Sam!!");
  });
  test("calling the addVolume function to previous test", () => {
    const greeter = new LoudGreeter("Hello");
    greeter.addVolume();
    greeter.addVolume();
    const result = greeter.greet("Adam");
    expect(result).toBe("Hello, Adam!!!!");
  });
  test("alternative greeting with no calling of the addVolume() function", () => {
    const greeter = new LoudGreeter("Hey there");
    const result = greeter.greet("Bethany");
    expect(result).toBe("Hey there, Bethany!!");
  });
});
