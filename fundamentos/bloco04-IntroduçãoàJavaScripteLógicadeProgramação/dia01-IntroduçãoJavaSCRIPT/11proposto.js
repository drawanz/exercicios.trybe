const salarioBruto = 1500.10
let salarioDescontadoINSS;
let salarioLiquido;

if (salarioBruto <= 1556.94){
    salarioDescontadoINSS = salarioBruto -salarioBruto*0.08;
    console.log("Seu salário líquido é: R$ ",salarioDescontadoINSS, "e não possui parcela a deduzir do IR");
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 1903.98){
    salarioDescontadoINSS = salarioBruto -salarioBruto*0.09;
    console.log("Seu salário líquido é: R$ ",salarioDescontadoINSS, "e não possui parcela a deduzir do IR");
}
else if (salarioBruto >= 1903.99 && salarioBruto <= 2594,92){
    salarioDescontadoINSS = salarioBruto -salarioBruto*0.09;
    salarioLiquido = salarioDescontadoINSS - salarioDescontadoINSS*0.075
    console.log("Seu salário líquido é: R$ ",salarioLiquido, "e parcela de R$ 142,80 a deduzir do imposto");
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 2826.65){
    salarioDescontadoINSS = salarioBruto -salarioBruto*0.11;
    salarioLiquido = salarioDescontadoINSS - salarioDescontadoINSS*0.075
    console.log("Seu salário líquido é: R$ ",salarioLiquido, "e parcela de R$ 142,80 a deduzir do imposto");
}
else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    salarioDescontadoINSS = salarioBruto -salarioBruto*0.11;
    salarioLiquido = salarioDescontadoINSS - salarioDescontadoINSS*0.15
    console.log("Seu salário líquido é: R$ ",salarioLiquido, "e parcela de R$ 354,80 a deduzir do imposto");
}
else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    salarioDescontadoINSS = salarioBruto -salarioBruto*0.11;
    salarioLiquido = salarioDescontadoINSS - salarioDescontadoINSS*0.225
    console.log("Seu salário líquido é: R$ ",salarioLiquido, "e parcela de R$ 663,13 a deduzir do imposto");
}
else if (salarioBruto >= 4664.69 && salarioBruto <= 5189.82){
    salarioDescontadoINSS = salarioBruto -salarioBruto*0.11;
    salarioLiquido = salarioDescontadoINSS - salarioDescontadoINSS*0.275
    console.log("Seu salário líquido é: R$ ",salarioLiquido, "e parcela de R$ 869,36 a deduzir do imposto");
}
else if (salarioBruto > 5189,82){
    salarioDescontadoINSS = salarioBruto -570.88;
    salarioLiquido = salarioDescontadoINSS - salarioDescontadoINSS*0.275
    console.log("Seu salário líquido é: R$ ",salarioLiquido, "e parcela de R$ 869,36 a deduzir do imposto");
}
else{
    console.log("Ocorreu algum erro inesperado");
}
