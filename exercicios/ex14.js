const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").split("\n");

let a = 0;
let b = 0;
let i1 = 1;
let i2 = 2;

let quantidadeDeApertos = Number(input[0]);
let apertos = input[1].split(" ").map(Number);

for (let i = 0; i < quantidadeDeApertos; i++) {
  let perguntarI = apertos[i];

  if (perguntarI == 1) {
    if (a == 0) {
      a = 1;
    } else {
      a = 0;
    }
  }
  if (perguntarI == 2) {
    if (a == 0) {
      a = 1;
    } else {
      a = 0;
    }

    if (b == 0) {
      b = 1;
    } else {
      b = 0;
    }
  }
}
console.log(`${a}`);
console.log(`${b}`);