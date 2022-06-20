const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyparser.json());

app.get('/ping', (_req, res) => res.status(200).send({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).send({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17)  res.status(401).send({ message: "Não autorizado" });
  res.status(200).send({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).send({ message: `Seu nome é ${name} e você tem ${age} anos` });
});


app.listen(3000, () => console.log('escutando na porta 3000'));
