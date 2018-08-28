let valores = [2, 4, 6];

function soma3(x, y, z){
    console.log(x+y+z);
}

soma3(...valores);
//12

// Porém, ao usar spread, não passamos mais uma lista, mas os elementos dela
// Dessa forma, nossa função trabalha perfeitamente