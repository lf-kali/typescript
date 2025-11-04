import readline = require('readline-sync');

const nums: Array<number> = new Array<number>(47, -3, 12, 89, 3, -56, 34, 7, -18, 65);

let alvo: number = readline.questionInt("Que número você deseja encontrar?: ");
let encontrado: boolean = false

for(let num of nums){
    if (num === alvo){
        console.log(`O número ${alvo} está localizado na posição: ${nums.indexOf(num)}`);
        encontrado = true
        break
    }
}
if(!encontrado){
    console.log(`Número ${alvo} não encontrado!`);
}