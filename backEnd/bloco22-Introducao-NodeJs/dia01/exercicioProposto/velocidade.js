const readLineSync = require('readline-sync');

const distancia = readLineSync.questionFloat('Qual a distância em metros? ')
const tempo = readLineSync.question('Qual foi o tempo decorrido? ')

const velocidade = () => console.log(distancia / tempo).toFixed(2);

module.exports = { velocidade };