const operacao = require('./operacao');

const parametro1 = Math.floor(Math.random() * 100 + 1);
const parametro2 = Math.floor(Math.random() * 100 + 1);
const parametro3 = Math.floor(Math.random() * 100 + 1);

// operacao(parametro1, parametro2, parametro3)
//     .then(resultado => console.log(`Sucesso, resultado: ${resultado}`))
//     .catch(error => console.log(`Erro: ${error}`));

const chamarOperacao = async () => {
    try {
        const result = await operacao(parametro1, parametro2, parametro3);
        console.log(`Sucesso, resultado: ${result}`)
    } catch (e) {
        console.log(`Erro: ${e}`);
    }
};

chamarOperacao();