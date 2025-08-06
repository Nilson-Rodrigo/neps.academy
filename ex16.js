const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// separa por linha
let linha = input.trim().split("\n");

// lê a quantidade de dias (primeira linha)
let dias = parseInt(linha[0]);

// inicializa soma e contador
let soma = 0;
let qtd = 0;

// converte e soma até alcançar 1 milhão
for (let i = 1; i <= dias; i++) {
    soma += parseInt(linha[i]);
    qtd++;
    if (soma >= 1000000) {
            break;
    }
}

console.log(qtd);
