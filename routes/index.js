const express = require('express');
const router= express.Router();
const airQuality = require('./airQuality.router')


router.use('/air-quality' , airQuality);

module.exports = router;
