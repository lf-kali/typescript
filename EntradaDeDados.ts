import readline = require("readline-sync");

let quantidade: number;
let altura: number;

quantidade = readline.questionInt("\nDigite a quantidade: ",
    {limitMessage: "Digite um número inteiro!"}
)

console.log(`A quantidade é: ${quantidade}`);

altura = readline.questionInt("Sua altura: ")