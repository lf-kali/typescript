import readline = require('readline-sync');
import { Queue } from "../../estrutura-dados/queue";

const clientes = new Queue<string>();

let opcao: number;
do {
    console.log("\n############### FILA DE ATENDIMENTO ###############");
    console.log("1 - Adicionar cliente à fila"); 
    console.log("2 - Listar todos os clientes da fila"); 
    console.log("3 - Retirar cliente da fila"); 
    console.log("0 - Sair");
    console.log("###################################################");

    opcao = readline.questionInt("Opção: ");

    switch(opcao){
        case 1:
            let cliente: string = readline.question("\nNome do cliente: ");
            clientes.enqueue(cliente);
            console.log(`\nCliente adicionado à fila: ${cliente}`);
            break;
        case 2:
            if (!clientes.isEmpty()){
                console.log("\nClientes na fila:");
                clientes.printQueue();
            }
            else {
                console.log("\nFila vazia!");
            }
            break;
        case 3:
            if(!clientes.isEmpty()){                
                console.log(`\nCliente ${clientes.dequeue()} foi chamado!`);
                console.log("Clientes na fila:\n");
                clientes.printQueue();
            }
            else{
                console.log("\nFile[a] vazia!");
            }
            break;
        case 0:
            break;
        default:
            console.log("\nOpção inválida!")
    }
} while(opcao !== 0)