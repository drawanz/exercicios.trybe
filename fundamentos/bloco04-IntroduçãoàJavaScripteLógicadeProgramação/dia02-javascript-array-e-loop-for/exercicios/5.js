let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;


for( let index =0; index < numbers.length; index += 1){
    if (numbers[index] > resultado){
        resultado = numbers[index];
    }
    else(
        resultado = resultado
    )
}

    console.log("O maior número da sequência é: ", resultado);