const readLineSync = require('readline-sync');

const peso = readLineSync.questionFloat('Qual seu peso, em kgs? ')
const altura = readLineSync.question('Qual sua altura, em metros? ')

function imc() {
  const imcTeste = (peso/(altura * altura)).toFixed(2);
  console.log(imcTeste);

  if (imcTeste < 18.5) console.log('Abaixo do peso (magreza)');
  if (imcTeste >= 18.5 && imcTeste <= 24.9) console.log('Peso normal');
  if (imcTeste >= 25.0 && imcTeste <= 29.9) console.log('Acima do Peso (sobrepeso)');
  if (imcTeste >= 30 && imcTeste <= 34.9) console.log('Obesidade grau I');
  if (imcTeste >= 35 && imcTeste <= 39.9) console.log('Obesidade grau II');
  if (imcTeste >= 40) console.log(`Obesidade grau III e IV`);
}

module.exports = { imc };
