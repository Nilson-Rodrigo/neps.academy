const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").split("\n");

let tentaiva = Number(input[0]);
let acumula = 0;

for (let i = 0; i < tentaiva; i++) {
    let l = Number(input[i + 1].split(" ")[0]);
    let c = Number(input[i + 1].split(" ")[1]);

    if (l > c) {
        acumula = acumula + c;
    }
}

console.log(acumula);