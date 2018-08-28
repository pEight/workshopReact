// Uma classe é como uma fábrica de objetos
// Não se apegue muito a essa sintaxe, em React as coisas são bem diferentes
// Mas não se preocupe, fica BEEEEEM mais facil ;)

class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;

      this.calcularArea= function() {
        return this.altura*this.largura;
      }
    }

  }
  
var meuRetang = new Retangulo(10, 20);

console.log(meuRetang.calcularArea());
//"200"
