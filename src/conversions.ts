export function binaryToDecimal(binary: string): number | string {
  let position: number = 1;
  let result: number = 0;

  let reversedBinary: string[] = binary.split("").reverse();

  reversedBinary.forEach((digit) => {
    if (digit === "1") {
      result += position;
    }

    position *= 2;
  });

  return `Decimal Result: ${result}`;
}

export function decimalToBinary(decimal: string): string {
  let remainders: number[] = [];
  let quotient: number = parseFloat(decimal);
  let modulus: number = parseFloat(decimal);

  while (quotient > 0) {
    modulus = quotient % 2;
    quotient = Math.floor(quotient / 2);
    remainders.push(modulus);
  }

  return `Binary Result: ${remainders.reverse().join("")}`;
}
