const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let perguntaNumeros = Number(input[0]);
let juntarNumerosDivisiveis = [];

for (let i = 1; i <= perguntaNumeros; i++) {
  if (perguntaNumeros % i == 0) {
    juntarNumerosDivisiveis.push(i);
  }
}

console.log(juntarNumerosDivisiveis.join(" "));