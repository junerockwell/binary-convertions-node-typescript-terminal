"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryPrompt = exports.decimalPrompt = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var conversions_1 = require("../conversions");
function initialPrompt() {
    rl.question("* Binary to Decimal [press d]\n* Decimal to Binary [press b]\n", function (option) {
        if (option === "b") {
            decimalPrompt();
        }
        else if (option === "d") {
            binaryPrompt();
        }
        else {
            initialPrompt();
        }
    });
}
exports.default = initialPrompt;
function decimalPrompt() {
    rl.question("Enter Decimal [r to restart]: ", function (decimal) {
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
        console.log(conversions_1.decimalToBinary(decimal));
        initialPrompt();
    });
}
exports.decimalPrompt = decimalPrompt;
function binaryPrompt() {
    rl.question("Enter Binary [r to restart]: ", function (binary) {
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
        console.log(conversions_1.binaryToDecimal(binary));
        initialPrompt();
    });
}
exports.binaryPrompt = binaryPrompt;
