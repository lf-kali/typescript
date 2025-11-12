import { Ciclista } from "./interfaces/Ciclista";
import { Corredor } from "./interfaces/Corredor";
import { Nadador } from "./interfaces/Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Corredor, Nadador {

    aquecer(): void {
        console.log(`Triatleta se aquecendo...`);
                
    }

    correr(): void {
        console.log(`Triatleta correndo...`);
        
    }

    pedalar(): void {
        console.log(`Triatleta pedalando...`);
        
    }

    nadar(): void {
        console.log(`Triatleta nadando...`);
        
    }

    public alimentar(): void {
        console.log(`Triatleta se alimentando...`);
    }
}