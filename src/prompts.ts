const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

import { decimalToBinary, binaryToDecimal } from "./conversions";

export default function initialPrompt() {
  rl.question(
    "* Binary to Decimal [type d]\n* Decimal to Binary [type b]\n",
    (option: "b" | "d") => {
      if (option === "d") {
        decimalPrompt();
      } else if (option === "b") {
        binaryPrompt();
      }
    }
  );
}

export function decimalPrompt() {
  rl.question("Enter Decimal: ", (decimal: string) => {
    if (!decimal) {
      console.log("You didn't enter a decimal!");
      decimalPrompt();
      return;
    }
    console.log(decimalToBinary(decimal));
    initialPrompt();
  });
}

export function binaryPrompt() {
  rl.question("Enter Binary: ", (binary: string) => {
    // make custom type that only takes in 0's and 1's
    if (!binary) {
      console.log("You didn't enter a binary!");
      binaryPrompt();
      return;
    }
    console.log(binaryToDecimal(binary));
    initialPrompt();
  });
}
