import { Animal } from "./Animal";

export class Preguica extends Animal {
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`${this._nome} está emitindo um som sonolento: roooooncc, mimimimimimi`);
    }

    public escalarArvore(): void {
        console.log(`${this._nome} está escalando a árvore lentamente...`);
    }
}