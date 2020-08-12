"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe("Conversion Functions", function () {
    it("converts binary string to the correct decimal result", function () {
        var binary = "1101100";
        expect(index_1.binaryToDecimal(binary)).toBe("Decimal Result: 108");
    });
    it("converts decimal input (of type string) to the correct binary result", function () {
        var decimal = "108";
        expect(index_1.decimalToBinary(decimal)).toBe("Binary Result: 1101100");
    });
});
