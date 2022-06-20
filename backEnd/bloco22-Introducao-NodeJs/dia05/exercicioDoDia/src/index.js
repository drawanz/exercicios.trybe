const express = require('express');
const bodyparser = require('body-parser');
const router = require('../routes/router');
const app = express();
const rescue = require('express-rescue');

app.use(bodyparser.json());
app.use('/store', rescue(router));
app.listen(3000, () => console.log('escutando na porta 3000'));