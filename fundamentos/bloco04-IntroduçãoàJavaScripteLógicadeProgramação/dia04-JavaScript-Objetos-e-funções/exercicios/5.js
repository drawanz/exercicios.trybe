let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim"
  };

let patinhas = {
    personagem: "Tio Patinhas" ,
    origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (let i in info, patinhas){
    if (info[i] && patinhas[i] === 'Sim'){
        console.log("Ambos recorrentes");
    }
    else{
        console.log(info[i], " e " , patinhas[i]); 
    }
    
}

