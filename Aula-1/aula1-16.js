let objeto1 = {
    x: 12
}

let objeto2 = objeto1;

objeto1.x = 10;

console.log(objeto1.x);
// 10
console.log(objeto2.x);
// 10

// Como esses objetos são a mesma coisa, alterar o objeto1 também irá
// alterar o objeto2, e isso muitas vezes não é desejável