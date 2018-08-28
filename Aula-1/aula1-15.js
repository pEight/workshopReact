let objeto1 = {
    x: 12
}

let objeto2 = objeto1;

console.log(objeto1==objeto2);
// True
console.log(objeto1===objeto2);
// True

// Porém, ao igualar um objeto a outro desse modo, iremos literalmente dizer
// Eles são a MESMA coisa
// Assemelha-se a "apontar para o mesmo endereço de memória", pois sua passagem
// é feita por referência, e não por valor

// Nota: Em JavaScript, tipos primitivos são passados por valor
//       Objetos são passados por referência