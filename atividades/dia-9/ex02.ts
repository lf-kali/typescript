import readline = require('readline-sync');
import { Stack } from "../../estrutura-dados/Stack";

const livros = new Stack<string>();

let opcao: number;
do {
    console.log("\n############### PILHA DE LIVROS ################");
    console.log("\n1 - Adicionar livro à pilha"); 
    console.log("\n2 - Listar todos os livros da pilha"); 
    console.log("\n3 - Retirar livro da pilha"); 
    console.log("\n0 - Sair");
    console.log("\n###################################################");

    opcao = readline.questionInt("Opção: ");

    switch(opcao){
        case 1:
            let livro: string = readline.question("\nNome do livro: ");
            livros.push(livro);
            console.log(`\nLivro adicionado: ${livro}`);
            break;
        case 2:
            if (!livros.isEmpty()){
                console.log("\nlivros na pilha:");
                livros.printStack();
            }
            else {
                console.log("\npilha vazia!");
            }
            break;
        case 3:
            if(!livros.isEmpty()){                
                console.log(`\nlivro ${livros.pop()} foi removido!`);
                console.log("livros na pilha:\n");
                livros.printStack();
            }
            else{
                console.log("\n Pilha vazia!");
            }
            break;
        case 0:
            break;
        default:
            console.log("\nOpção inválida!");
    }
} while(opcao !== 0)