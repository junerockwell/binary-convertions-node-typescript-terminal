const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name: string) => {
  rl.question("Where do you live? ", (country: string) => {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

rl.on("close", () => {
  console.log("BYYYYE");
  process.exit(0);
});
