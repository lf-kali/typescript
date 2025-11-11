import { Carro } from "./Carro";

const carro: Carro = new Carro("Toyota", "Corolla", "Prata", "Flex", 9500)
// carro.fabricante = 'Toyota';
// carro.modelo = 'Corolla';
// carro.cor = 'Prata';
// carro.tipoDeCombustivel = 'Flex';
// carro.valorDeMercado = 9500;

// console.log(`Fabricante: ${carro.fabricante}`);
// console.log(`Modelo: ${carro.modelo}`);
// console.log(`Cor: ${carro.cor}`);
// console.log(`Tipo de combustível: ${carro.tipoDeCombustivel}`);
// console.log(`Valor de mercado: R$ ${carro.valorDeMercado}`);

carro.ligar();
carro.acelerar(40);
carro.frear();
carro.acelerar(100);
let preco = carro.abastecer(40, 5.99);

console.log(`Abastecido com R$${preco}`);

carro.exibirDetalhes();