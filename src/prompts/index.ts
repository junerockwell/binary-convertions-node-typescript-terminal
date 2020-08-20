const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

import { decimalToBinary, binaryToDecimal } from "../conversions";

export default function initialPrompt() {
  rl.question(
    "* Binary to Decimal [press d]\n* Decimal to Binary [press b]\n",
    (option: "b" | "d") => {
      if (option === "b") {
        decimalPrompt();
      } else if (option === "d") {
        binaryPrompt();
      } else {
        initialPrompt();
      }
    }
  );
}

export function decimalPrompt() {
  rl.question("Enter Decimal [r to restart]: ", (decimal: string) => {
    if (!decimal) {
      console.log("You didn't enter a decimal!");
      decimalPrompt();
      return;
    }

    if (decimal.trim() === "r") {
      initialPrompt();
      return;
    }

    if (!decimal.match(/^[1-9][0-9]*$/)) {
      console.log("You didn't enter a decimal!");
      decimalPrompt();
      return;
    }

    console.log(decimalToBinary(decimal));
    initialPrompt();
  });
}

export function binaryPrompt() {
  rl.question("Enter Binary [r to restart]: ", (binary: string) => {
    if (!binary) {
      console.log("You didn't enter a binary!");
      binaryPrompt();
      return;
    }

    if (binary.trim() === "r") {
      initialPrompt();
      return;
    }

    if (!binary.match(/^[0-1]*$/)) {
      console.log("You didn't enter a binary!");
      binaryPrompt();
      return;
    }

    console.log(binaryToDecimal(binary));
    initialPrompt();
  });
}
