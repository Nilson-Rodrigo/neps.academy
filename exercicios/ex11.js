// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseFloat(input.split(" ")[0])
let B = parseFloat(input.split(" ")[1])
let media = parseFloat(A + B)/2
// Seu código vai aqui
if(media >= 7){
    console.log('Aprovado');
} if(media >= 4 && media <7){
    console.log('Recuperacao');
}if(media < 4){
     console.log('Reprovado'); 
}