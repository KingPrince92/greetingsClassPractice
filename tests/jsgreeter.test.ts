import { JavaScriptGreeter } from "../src/javascriptgreeter";

describe("the JavaScriptGreeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new JavaScriptGreeter("Hello");
    const result = greeter.greeting;
    expect(result).toBe("Hello");
  });
  test("the greet function was overridden and works properly", () => {
    const greeter = new JavaScriptGreeter("Hello");
    const result = greeter.greet("Jennifer");
    expect(result).toBe("console.log(Hello, Jennifer!)");
  });
  test("the greet function was overridden and works properly with alternative name and greeting", () => {
    const greeter = new JavaScriptGreeter("How are you");
    const result = greeter.greet("Adam");
    expect(result).toBe("console.log(How are you, Adam!)");
  });
});
