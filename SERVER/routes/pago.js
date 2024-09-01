const express = require('express');
const router = express.Router();
const {procesarPago} = require('../controllers/pagoController');


router.post('/',procesarPago);

module.exports = router;