"use strict";
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What is your name? ", function (name) {
    rl.question("Where do you live? ", function (country) {
        console.log(name + ", is a citizen of " + country);
        rl.close();
    });
});
rl.on("close", function () {
    console.log("BYYYYE");
    process.exit(0);
});
