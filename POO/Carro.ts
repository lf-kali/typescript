export class Carro {
    // atributos
    private _fabricante: string;
    private _modelo: string;
    private _cor: string;
    private _tipoDeCombustivel: string;
    private _valorDeMercado: number;

    constructor(fabricante: string, modelo: string, cor: string, tipoDeCombustivel: string, valorDeMercado: number){
        this._fabricante = fabricante;
        this._modelo = modelo;
        this._cor = cor;
        this._tipoDeCombustivel = tipoDeCombustivel;
        this._valorDeMercado = valorDeMercado;
    }
    
    public get fabricante(): string{
        return this._fabricante;
    }

    public get modelo(): string{
        return this._modelo;
    }

    public get cor(): string{
        return this._cor;
    }

    public get tipoDeCombustivel(): string{
        return this._tipoDeCombustivel;
    }

    public get valorDeMercado(): number{
        return this._valorDeMercado;
    }

    public set fabricante(fabricante: string){
        this._fabricante = fabricante;
    }

    public set modelo(modelo: string){
        this._modelo = modelo;
    }

    public set cor(cor: string){
        this._cor = cor;
    }

    public set tipoDeCombustivel(tipoDeCombustivel: string){
        this._tipoDeCombustivel = tipoDeCombustivel;
    }

    public set valorDeMercado(valorDeMercado: number){
        this._valorDeMercado = valorDeMercado;
    }

    public ligar(): void{
        console.log(`${this._modelo} está ligando...`);
    }

    public acelerar(velocidade: number){
        console.log(`${this._modelo} está acelerando a ${velocidade} km/h`);
    }

    public frear(): void {
        console.log(`${this._modelo} está freando`);
    }

    public abastecer(litros: number, precoPorLitro: number): number {
        return litros * precoPorLitro;
    }

    public exibirDetalhes():void {
        console.log("******* Dados do Carro *******");
        console.log(`Fabricante: ${this._fabricante}`);
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Fabricante: ${this._cor}`);
        console.log(`Tpo de combustível: ${this._tipoDeCombustivel}`);
        console.log(`Valor de mercado: ${this._valorDeMercado}`);
    }
}

