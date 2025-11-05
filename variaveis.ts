// let identificador: tipo = valor;

let variavel: any = 'texto';
variavel = 123;
variavel = true;

let aprovado: boolean = true;

let peso: number = 75.50;

let idade: number = 24
let nome: string = "Kali"

console.log(`Bom dia, ${nome}! Seu peso é ${peso}kg e sua idade é ${idade} anos`);

let sobrenome = 'Araújo';

let anoNascimento = 1990;

console.log(`tipo da variável sobrenome: ${typeof sobrenome}`);
console.log(`tipo da variável sobrenome: ${typeof anoNascimento}`);

// null e undefined

let cliente: any = null;

let ano: number | undefined;

console.log(ano);

// NaN e Infinity

let numero = Number("abc");

console.log(numero);

// Infinity

let a = 1/0;

console.log(a);

// Constantes

const QUANTIDADE: number = 10;

const PORT: number = 3000;
