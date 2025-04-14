const API_KEY = process.env.API_KEY

const IQAIRULR = process.env.IQAIRULR

const axios = require('axios')

const AirQualityModel = require('../Models/AirQuality')

class AirQualityService {

    async getAirQuality({lat , long}){
        const airQualityData = await this.getIQairService({lat , long})
        return {
           Result: {
             Pollution: airQualityData.data.current.pollution
           }
       };
    }

    async mostPolluted () {
        const mostPolluted = await AirQualityModel.findOne().sort({ 'pollution.aqius': -1 });
        return {
            Result: {
                DateOfMostPolluted: mostPolluted.pollution.ts,
                mostPolluted: mostPolluted.pollution.aqius
          }
        };
    }

    async getIQairService ({lat , long}){

        const response =  await axios({
            method: "get",
            url : IQAIRULR + "nearest_city",
            params: {
                lat:lat,
                lon:long,
                key: API_KEY
            },
        })

        return response.data
    }
}

module.exports = AirQualityService

