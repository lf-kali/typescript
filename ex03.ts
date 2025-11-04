import readline = require('readline-sync');

const nums: Set<number> = new Set<number>([]);
console.log("Digite 10 números diferentes:");

let cont: number = 1;

while(nums.size < 10){
    let novoNum: number= readline.questionInt(`\nDigite o ${cont}o número: `);
    if (nums.has(novoNum)){
        console.log(`Número ${novoNum} já existe no set!`)
    }
    else{
        nums.add(novoNum);
        cont += 1;
    }
}

console.log("Números do set:")

for (let num of nums) {
    console.log(num);
}