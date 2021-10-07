var express = require('express');
var router = express.Router();

var getCalculator = require('../controller/dashboard');

router.get('/home', getCalculator.getHome);

module.exports = router;