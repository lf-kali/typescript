import { Animal } from "./Animal";

export class Cavalo extends Animal {
    constructor (nome: string, idade: number){
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`${this._nome} está relinchando: Irrinhó!`);
    }

    public correr(): void {
        console.log(`${this._nome} está correndo!`);
    }
}