const mongoose = require("mongoose")
const { date } = require("yup")

const AirQuality = mongoose.model('AirQuality' , new mongoose.Schema({
    city: String,
    state: String,
    country: String,
    location: {
        type: {
            type:String,
            default: 'point'
        },
        coordinates : [Number]
    },
    pollution: {
        ts: Date,
        aqius: Number,
        mainus: String,
        aqicn: Number,
        maincn: String
    },
    createdAt: {
        type: Date ,
        default: Date.now
    }
}))

module.exports = AirQuality