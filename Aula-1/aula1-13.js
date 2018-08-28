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