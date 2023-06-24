const readline = require("readline");
const process = require("process");

const add = require("./src/addition.js");
const div = require("./src/division.js");
const sub = require("./src/subtraction.js");
const multi = require("./src/multiplication.js");

// process.stdin.on("readable", () => {
//   let qst = process.stdin.read();
//   const itsCommand = qst.toString().split("");
//   if (isCommand[0] === "!") {
//     console.log("Tem acentuação");
//   } else {
//     console.log("Não tem acentuação");
//   }
// });

const lr = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lr.question(
  "Qual operação você escolhe:\n 1: Adição\n 2: Subtração\n 3: Multiplicação\n 4: Divisão\n => ",
  (answer) => {
    console.log(`A operação escolhida ${answer}`);
    switch (answer) {
      case "1":
        add(lr);
        break;

      case "2":
        sub(lr);
        break;

      case "3":
        multi(lr);
        break;

      case "4":
        div(lr);
        break;

      default:
        break;
    }
  }
);
