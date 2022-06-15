const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

const encontraId = (id) => {
    try {
        const promise = new Promise(async (resolve, reject) => {
        const simpsons = await fs.readFile(nomeDoArquivo, 'utf-8');
        const simpsonsParse = JSON.parse(simpsons);
        
        if (!simpsonsParse.some((e) => e.id == id)) reject(new Error('id não encontrado'));

        resolve(console.log(simpsonsParse.find((e) => e.id === id)));
    })
        return promise;
    } catch (e) {
        console.log(`erro: ${e.message}`);
    }
};

encontraId('3');
