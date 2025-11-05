import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Prato 1");
pilha.push("Prato 2");
pilha.push("Prato 3");
pilha.push("Prato 4");
pilha.push("Prato 5");
pilha.push("Prato 6");
pilha.push("Prato 7");
pilha.push("Prato 8");

console.log("pratos na pila:");

pilha.printStack();

console.log(`\nPrato removido: ${pilha.pop()}`);

pilha.printStack();

pilha.push("prato 9")

console.log(`\nPrato do topo: ${pilha.peek()}`);

pilha.printStack();

console.log(`\nTamanho da pilha: ${pilha.count()}`);

console.log(`\nO prato 3 está na pilha? ${pilha.contains("Prato 3")}`);

pilha.clear();

console.log(`\nA pilha está vazia? ${pilha.isEmpty()}`);
