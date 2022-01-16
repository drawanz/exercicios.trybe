const fatorial = (number) => {
    let resultado = 1;
    if(number === 0){
        resultado = 1;
    }
    for( let i =0; i < number; i +=1){
        let fatorial = (number -i);
        resultado = resultado * fatorial
        
    }
    console.log(resultado);
}

fatorial(0);

const longestWord = (frase) => {
    let word = frase.split(' ');
    let answer = 0;
    let answerWord = 'xablau'
    for(let longestword of word){
        if(longestword.length > answer){
            answer = longestword.length
            answerWord = longestword;
        }
    }
    console.log(answerWord);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'