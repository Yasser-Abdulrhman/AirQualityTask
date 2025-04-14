const cron = require('node-cron')

const AirQualityService = require('../services/airQuality.services')

const AirQualityServiceObject = new AirQualityService()

const AirQualityModel = require('../Models/AirQuality')

const  lat= 48.856613
const long= 2.352222
  

async function loggingAirQuality() {
    try {
        const airQualityData = await AirQualityServiceObject.getIQairService({lat , long})
        const loggedAirQuality = await AirQualityModel.create({
            city: airQualityData.data.city,
            state: airQualityData.data.state,
            country: airQualityData.data.country,
            location: {
                coordinates:[
                    airQualityData.data.location.coordinates[0],
                    airQualityData.data.location.coordinates[1]
                ]
            },
            pollution: airQualityData.data.current.pollution
        });
        if(loggedAirQuality)
        console.log('Air quality data saved at', new Date());

    } catch (error) {
        console.error('Error in CRON job:', error);
    }
    
}


module.exports.startCronJob = () => {
    // Run every minute: * * * * *
    cron.schedule('* * * * *', loggingAirQuality);
    console.log('CRON job started - checking Paris air quality every minute');
};
  