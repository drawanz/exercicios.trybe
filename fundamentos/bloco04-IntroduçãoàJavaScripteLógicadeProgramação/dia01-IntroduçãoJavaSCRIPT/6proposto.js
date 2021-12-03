let a = "cavalo";

if (a === "peao"){
    console.log("No primeiro movimento, anda duas casas, nos movimentos seguintes, anda uma casa por jogada.");
}
else if (a === "torre"){
    console.log("Se movimenta pelas colunas ou linhas livres no tabuleiro, sem limite de casas por movimento.");
}
else if (a === "cavalo"){
    console.log("Se movimenta em L pelo tabuleiro.");
}
else if (a === "bispo"){
    console.log("Se movimenta pelos espaços livres na diagonal pelo tabuleiro, sem limite de casas por movimento.");
}
else if (a === "queen"){
    console.log("Se movimenta em diagonais, colunas e linhas livres, sem limite de casas por movimento.");
}
else if (a === "king"){
    console.log("Se movimenta para esquerda, direita, para cima ou para baixo, porém em apenas uma casa por lance, não podendo se colocar em perigo.");
}
else{
    console.log("Essa peça não foi reconhecida.");
}