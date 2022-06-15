const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

const filtrandoSimpsons = async () => {
    try {
        const simpsons = await fs.readFile(nomeDoArquivo, 'utf8');
        const simpsonsParse = (JSON.parse(simpsons))
        const newArray = simpsonsParse.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
        return newArray;
    } catch (e) {
        console.log(`erro: ${e.message}`);
    }
}

const arquivoSerAlterado = 'simpsons-alterado.json';

filtrandoSimpsons().then((result) => {
    fs.writeFile(arquivoSerAlterado, JSON.stringify(result))
        .then(() => {
            console.log('Arquivo escrito com sucesso!');
        })
        .catch((err) => {
            console.error(`Erro ao escrever o arquivo: ${err.message}`);
        });
});

