let n = 8;
let asteriscos = "*";
let colunas = "";
let espaçoEmBranco = " "

for (let i=0; i < n ; i +=1){
    colunas = espaçoEmBranco.repeat(n-i) + asteriscos.repeat(i)
    console.log(colunas)

}
