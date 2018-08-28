// Um objeto em javascript é como um container que armazena propriedades
// e métodos. Delimitamos ele por chaves({}) e suas propriedades e métodos 
// por dois pontos (:) e os separamos por vírgulas (,) como visto abaixo

const pessoa = {
    nome: "Pedro",

    falarOi: function(){
        return console.log("Oi! Meu nome e "+this.nome+"!");
    }
}

pessoa.falarOi();
//"Oi! Meu nome e Pedro!"

// Para acessar propriedades e métodos de um objeto usamos:
// NOMEOBJETO.NOMEPROPRIEDADE