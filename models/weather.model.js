const mongoose = require("mongoose")

const WeatherModel = mongoose.Schema({
    district: {
        type: String
    },
    temperature: {
        type: Number
    },
    humidity: {
        type: Number
    },
    airPressure: {
        type: Number
    },
    timestamp: {
        type: Date
    },

})

module.exports = mongoose.model("Weather", WeatherModel)