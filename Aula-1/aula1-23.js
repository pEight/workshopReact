function multiplica(multiplicador, ...restante) {
    return restante.map(function (elemento) {
      return multiplicador * elemento;
    });
}
  
var lista = multiplica(2, 1, 2, 3); 
console.log(lista);
// [2, 4, 6]

// O operador rest(...) é escrito da mesma maneira do spread(...)
// Ele permite que nossa função trate o restantes das propriedades como uma lista
// Para quem já tem familiaridade, assemelha-se a uma sobrecarga de função
// Ele não é utilizado com muita frequencia, mas pode ser muito util