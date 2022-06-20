const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const fs = require('fs').promises;

const app = express();

app.use(cors());

app.use(bodyparser.json());

const readSimpsons = async () => {
  try {
    const simpsons = await fs.readFile('simpsons.json', 'utf-8');
    console.log(simpsons);
    return JSON.parse(simpsons);
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
}

const appendSimpsons = async (id, name) => {
  try {
    const array = await readSimpsons();
    console.log(array);
    const newArray =  [...array, { "id": id, "name": name }];
    await fs.writeFile('simpsons.json',     JSON.stringify(newArray) );
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
}

appendSimpsons(1, 'leo');

app.get('/simpsons', async (_req, res) => {
  const arraySimpsons = await readSimpsons();
  res.status(200).send(arraySimpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const arraySimpsons = await readSimpsons();
  const { id } = req.params;
  const findSimpson = arraySimpsons.find((person) => person.id === id); 
  if (!findSimpson || findSimpson === undefined) res.status(404).send( { message: 'simpson not found' } );
  res.status(200).send(findSimpson);
});

app.post('/simpsons', async (req, res) => {
  const arraySimpsons = await readSimpsons();
  const { id, name } = req.body;
  const findSimpson = arraySimpsons.some((person) => person.id === id); 
  if (findSimpson) res.status(409).send( { message: 'id already exists' } );
  await appendSimpsons(id, name);
  res.status(204).end;
});

app.listen(3001, () => console.log("ouvindo na porta 3001"));