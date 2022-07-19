import { Greeter } from "../src/greeter";

class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log(${super.greet(name)})`;
  }
}

export { JavaScriptGreeter };
