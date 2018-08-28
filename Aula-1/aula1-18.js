let objeto1 = {
    x: 12
}

let objeto2 = {...objeto1};

objeto1.x = 10;

console.log(objeto1.x);
// 10
console.log(objeto2.x);
// 12

// O operador de spread (...) nos dá tudo que o objeto1, propriedades e métodos
// porém, essa passagem se dá por valor, e não por referência como antes,
// desse modo, alterar objeto1 não mais altera objeto2