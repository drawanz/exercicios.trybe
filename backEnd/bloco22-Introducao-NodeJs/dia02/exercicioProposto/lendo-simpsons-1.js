const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

const main = async () => {
    try {
        const simpsons = await fs.readFile(nomeDoArquivo, 'utf8')
        JSON.parse(simpsons).map(({id, name}) => console.log(`${id} - ${name}`));
    } catch (e) {
        console.log(`erro: ${e.message}`);
    }
}

main();