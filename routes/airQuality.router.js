const express = require('express');

const AirQualityController = require('../controllers/airQuality.controller')

const AirQualityControllerObject = new AirQualityController()
const router= express.Router();

const {validate} = require('../middlewares/validateRequest')
const {latAndLngSchema} = require('../schemaValidations/airQuality.schema');

  
router.get('/' , validate(latAndLngSchema , 'query'), AirQualityControllerObject.getAirQuality)
router.get('/paris/most-polluted' , AirQualityControllerObject.mostPolluted)

module.exports = router;
