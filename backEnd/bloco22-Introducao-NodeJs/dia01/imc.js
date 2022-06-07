const readLineSyc = require('readline-sync');

const peso = readLineSyc.question('Qual o seu peso em kg? ')

const altura = readLineSyc.questionFloat('Qual a sua altura em metros? ')

const imc = () => ((peso)/(altura * altura)).toFixed(2)
const imcReturn = imc();
console.log(imcReturn);

switch (imcReturn) {
  case imcReturn <= 18.5:
    console.log('Abaixo do peso (magreza)');
    break;
  case imcReturn > 18.5 && imcReturn <= 24.9:
    console.log('Peso normal');
    break;
  case imcReturn > 25.0 && imcReturn <= 29.9:
    console.log('Acima do peso (sobrepeso)');
    break;
  case imcReturn > 30.0 && imcReturn <= 34.9:
    console.log('Obesidade grau I');
    break;
  case imcReturn > 35.0 && imcReturn <= 39.9:
    console.log('Obesidade grau II');
    break;
  default:
    console.log('Obesidade graus III e IV');  
}
