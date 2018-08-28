let objeto1 = {
    x: 12
}

let objeto2 = {...objeto1};

objeto1.x = 10;

console.log(objeto1.x);
// 10
console.log(objeto2.x);
// 12