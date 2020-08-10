const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Which want do you want?\n* Binary to Decimal (type d)\n* Decimal to Binary (type b)\n",
  (option: "b" | "d") => {
    if (option === "b") {
      rl.question("Give me a decimal: ", (decimal: string) => {
        if (!decimal) {
          return console.log("You didn't enter a decimal!");
        }
        console.log(decimalToBinary(decimal));
      });
    } else if (option === "d") {
      rl.question("Give me a binary:", (binary: string) => {
        // make custom type that only takes in 0's and 1's
        if (!binary) {
          return console.log("You didn't enter a binary!");
        }
        console.log(binaryToDecimal(binary));
      });
    }
  }
);

rl.on("close", () => {
  console.log("BYYYYE");
  process.exit(0);
});

function binaryToDecimal(binary: string): number | string {
  let position: number = 1;
  let result: number = 0;

  let reversedBinary: string[] = binary.split("").reverse();

  reversedBinary.forEach((digit) => {
    if (digit === "1") {
      result += position;
    }

    position *= 2;
  });

  return result;
}

function decimalToBinary(decimal: string): string {
  let remainders: number[] = [];
  let quotient: number = parseFloat(decimal);
  let modulus: number = parseFloat(decimal);

  while (quotient > 0) {
    modulus = quotient % 2;
    quotient = Math.floor(quotient / 2);
    remainders.push(modulus);
  }

  return remainders.reverse().join("");
}
