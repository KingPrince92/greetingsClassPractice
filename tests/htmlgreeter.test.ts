import { HtmlGreeter } from "../src/htmlgreeter";

describe("the Htmlgreeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new HtmlGreeter("Hello");
    const result = greeter.greeting;
    expect(result).toBe("Hello");
  });
  test("the greet method has been overriden with no second argument entered", () => {
    const greeter = new HtmlGreeter("Hello");
    const result = greeter.greet("Trevor");
    expect(result).toBe("<h1>Hello, Trevor!</h1>");
  });
  test("the greet method has been overriden with different second argument", () => {
    const greeter = new HtmlGreeter("Hello", "div");
    const result = greeter.greet("Trevor");
    expect(result).toBe("<div>Hello, Trevor!</div>");
  });
});
