import readline from "readline-sync";

enum Months {
  jan = "janeiro", 
  fev = "fevereiro", 
  mar = "março",
};

enum Climate {
  primavera = "primavera", 
  verao = "verao", 
  outono = "outono",
  inverno = "inverno",
};

enum Season {
  janeiro = "verao",
  fevereiro = "outono",
  março = "inverno",
  abril = "primavera",
};

const estacao: string = readline.question('Diga um mês para saber a estação que ele se encontra: ');
// const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
console.log(typeof estacao);

console.info(Season)

