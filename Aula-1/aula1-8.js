// É uma boa prática definir algumas funções imutáveis do seu código com const
// Ela atua como uma função normal, mas não pode ser alterada
// Isso pode garantir uma estabilidade extra em seu código
// Para isso, declaramos a variável constante myFunc e a ela atribuimos uma funcao

const myFunc = function (meuNome) {
    return "Olá " + meuNome + "!"
}

console.log(myFunc("Pedro"));
//"Olá Pedro!"

let saudacao = myFunc("Suassuna");

console.log(saudacao);
//"Olá Suassuna!"