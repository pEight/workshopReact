// Arrays são como listas que armazenam valores
// Esses valores podem ser qualquer coisa geralmente, inclusive funções
// e outros arrays

let meuArr = ["Primeiro", "Segundo", "Terceiro"];

console.log(meuArr[0]);
//"Primeiro"

console.log(meuArr.length);
// 3

meuArr.map( (current) => {console.log("Eu sou o " + current)} );

// A função map vem do protótipo de todo array, ela percorre o array e executa
// Uma função para cada elemento dela. Sua sintaxe pode ser verificada no site:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map