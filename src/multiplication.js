const splitString = require("./splitString");

const multi = (interface) => {
  interface.question(
    "Digite os dois números separados por uma virgula. Ex: 30,20: ",
    (num) => {
      let number = splitString(num);
      let num1 = Number(number[0]);
      let num2 = Number(number[1]);
      let res = num1 * num2;
      console.log(`Resultado de ${num1} * ${num2} é ${res}`);
      interface.close();
    }
  );
};

module.exports = multi;
