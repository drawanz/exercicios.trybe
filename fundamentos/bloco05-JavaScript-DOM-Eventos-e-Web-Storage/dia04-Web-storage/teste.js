let numeros = [1, 2, 3, 4, 5]

function sobePosicao (array, daPosicao, paraPosicao){
    let elemento = array[daPosicao];
    array.splice(daPosicao, 1);
    array.splice(paraPosicao, 0, elemento)
    console.log(array);    
}

sobePosicao(numeros, 4, 0)





///console.log(numeros);
//console.log(deletados);

