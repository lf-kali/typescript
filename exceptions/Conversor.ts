const resultado = converter(123);
console.log(resultado);

export function converter(conteudo: any): string {
    return conteudo.toUpperCase();
}