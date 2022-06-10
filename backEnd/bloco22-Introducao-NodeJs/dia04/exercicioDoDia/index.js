const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ message: 'pong' }))

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200, 'OK').json({ message: `Hello, ${name}` })
  return res.status(401, "Unauthorized").json({ message: "Unauthorized" })
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200, 'OK').json({ message: `Hello, ${name} e vc tem ${age} anos de idade` })
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
