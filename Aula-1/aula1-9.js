// Arrow Functions são novas funções que vieram no ES6
// São funções normais com algumas peculiaridades que veremos depois
// Uma delas é: Elas são ótimas funções anônimas

const minhaFunc = (nome) => {
    return("Ola " + nome + "!");
}

console.log(minhaFunc("Luan"));
//"Ola Luan!"