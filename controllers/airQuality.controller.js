
const AirQualityService = require('../services/airQuality.services') 

const AirQualityServiceObject = new AirQualityService()



class AirQualityController {

    async getAirQuality (req , res) {
        try{
            const  {lat , long} =  req.query;
            const airQualityData = await AirQualityServiceObject.getAirQuality({lat , long})
            res.json(airQualityData);
        } catch (error){
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch air quality data' });    
        }
    }

    async mostPolluted (req , res) {
        try{
            const airQualityData = await AirQualityServiceObject.mostPolluted()
            res.json(airQualityData);
        } catch (error){
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch air quality data' });    
        }
    }
}


module.exports = AirQualityController