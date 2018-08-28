function multiplica(multiplicador, ...restante) {
    return restante.map(function (elemento) {
      return multiplicador * elemento;
    });
}
  
var lista = multiplica(2, 1, 2, 3); 
console.log(lista);
// [2, 4, 6]