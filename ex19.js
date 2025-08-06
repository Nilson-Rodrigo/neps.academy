// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
let pi =  3.1416;
let calculo = (input**2)*pi;
let area = parseFloat(calculo);
// Seu código vai aqui
console.log(area.toFixed(2));