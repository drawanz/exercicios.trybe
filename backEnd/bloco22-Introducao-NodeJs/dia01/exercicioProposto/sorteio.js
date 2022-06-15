const readLineSync = require('readline-sync');

const numeroPessoa = readLineSync.question('Qual o seu numero? ')

const sorteio = () => {
    const numeroAleatorio = Math.random() * (9) + 1;

    if (numeroAleatorio === numeroPessoa) {
        console.log('Parabéns, você acertou o número!');
    } else {
        console.log('Infelizmente não foi dessa vez, tente novamente!')
    }
}

module.exports = { sorteio };