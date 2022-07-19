class Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  greet(name: string) {
    return `${this.greeting}, ${name}!`;
  }
}

let greetGuy: Greeter = new Greeter("Hello");

console.log(greetGuy.greet("Alfred"));

export { Greeter };
