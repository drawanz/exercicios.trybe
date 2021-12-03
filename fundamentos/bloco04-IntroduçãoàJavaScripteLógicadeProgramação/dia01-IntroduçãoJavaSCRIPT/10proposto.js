const custo = 2;
const venda = 3.06;
let unidadesVenda= 1000;
let lucro;

let custoTotal = (0.2*custo) + custo;
lucro = (venda - custoTotal)*unidadesVenda;
console.log("Seu lucro foi de: R$ ",lucro);