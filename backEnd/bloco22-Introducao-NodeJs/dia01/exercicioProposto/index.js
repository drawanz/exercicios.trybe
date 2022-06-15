const readLineSync = require('readline-sync');

const qualScript = readLineSync.question('Você quer executar o script de cálculo de velocidade, imc ou sorteio?')

// const velocidade = require('./velocidade');
// const imc = require('./imc');
// const sorteio = require('./sorteio');

    const teste = require(`./${qualScript}`);
    teste[qualScript];