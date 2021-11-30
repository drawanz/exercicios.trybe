let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
let par = 0;


for( let index =0; index < numbers.length; index += 1){
    if ( numbers[index] % 2 > 0 ){
        impar += 1 
    }
    else{
        par += 1
    }
    }
    switch (impar > 0){
        case true:
        console.log("Quantidade de números ímpares igual a: ", impar);
        break;
        case false:
            console.log("Não foram encontrados números ímpares");
            break    
    }
