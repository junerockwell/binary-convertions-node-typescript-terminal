"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimalToBinary = exports.binaryToDecimal = void 0;
function binaryToDecimal(binary) {
    var position = 1;
    var result = 0;
    var reversedBinary = binary.split("").reverse();
    reversedBinary.forEach(function (digit) {
        if (digit === "1") {
            result += position;
        }
        position *= 2;
    });
    return "Decimal Result: " + result;
}
exports.binaryToDecimal = binaryToDecimal;
function decimalToBinary(decimal) {
    var remainders = [];
    var quotient = parseFloat(decimal);
    var modulus = null;
    while (quotient > 0) {
        modulus = quotient % 2;
        quotient = Math.floor(quotient / 2);
        remainders.push(modulus);
    }
    return "Binary Result: " + remainders.reverse().join("");
}
exports.decimalToBinary = decimalToBinary;
