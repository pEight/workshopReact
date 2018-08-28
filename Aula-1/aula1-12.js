const pessoa = {
    nome: "Pedro",

    falarOi: function(){
        return console.log("Oi! Meu nome e "+this.nome+"!");
    }
}

pessoa.falarOi();
//"Oi! Meu nome e Pedro!"