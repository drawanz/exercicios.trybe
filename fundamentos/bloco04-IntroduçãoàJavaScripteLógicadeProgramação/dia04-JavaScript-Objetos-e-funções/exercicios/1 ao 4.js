let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* console.log("Bem vinda, " + info["personagem"]);

info["recorrente"] = "sim"

console.log(info); */

info["recorrente"] = "Sim"

for (let i in info){
    console.log(info[i]);
}