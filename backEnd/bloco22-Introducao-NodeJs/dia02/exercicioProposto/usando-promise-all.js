const fs = require('fs').promises;

const teste = async () => {
    let array = [];
    let arrayNameFile = [];
    let arrayTxt = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    for (let index = 0; index <= 4; index++) {
        arrayNameFile.push(`file${index}.txt`);
        array.push(fs.writeFile(`file${index}.txt`, arrayTxt[index]))
    }
    await Promise.all(array);

    const promisesLeitura = arrayNameFile.map((e) => fs.readFile(e, 'utf-8'));
    const leituras = await Promise.all(promisesLeitura);

    await fs.writeFile('fileAll.txt', leituras.join(' '))
    const leituraFinal = await fs.readFile('fileAll.txt', 'utf-8');
    console.log(leituraFinal);
}

teste();