import { Greeter } from "../src/greeter";

class LoudGreeter extends Greeter {
  private extra: string = "!!";
  constructor(greeting: string) {
    super(greeting);
  }
  addVolume(): void {
    this.extra = `${this.extra}!`;
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}

let greetDude: LoudGreeter = new LoudGreeter("Hello");

console.log(greetDude.greet("Lorie"));

export { LoudGreeter };
