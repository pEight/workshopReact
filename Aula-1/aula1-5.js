// Definimos 3 variáveis, duas inteiras e uma string para demonstrar como
// A tipagem dinâmica de JavaScript pode ser um pouco imprevisível

let x = 8;
let y = 9;
let z = "10";

console.log(x+y);
//17

console.log(x+z);
//"810"

console.log(z+y);
//"109"

// Dica: Tente console.log(z*x);