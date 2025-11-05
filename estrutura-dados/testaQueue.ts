import {Queue} from "./queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
    fila.enqueue(i);
}

fila.printQueue();

console.log(`\n Remover elemento: ${fila.dequeue()}`);

fila.printQueue();

fila.enqueue(11);

fila.printQueue();

console.log(`\nPrimeiro elemento: ${fila.peek()}`);

console.log(`\nTamanho da fila: ${fila.count()}`);

console.log(`\nO elemento 4 existe na fila? ${fila.contains(4)}`);

console.log(`Limpar a fila: ${fila.clear}`);

console.log(`\nA fila está vazia? ${fila.isEmpty()}`);
