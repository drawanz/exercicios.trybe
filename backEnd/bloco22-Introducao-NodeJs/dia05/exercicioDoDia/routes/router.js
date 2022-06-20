const express = require('express');
const auth = require('../middleWares/auth');
const router = express.Router();
// const services = require('../services');

router.post('/sales', auth);

module.exports = router;
