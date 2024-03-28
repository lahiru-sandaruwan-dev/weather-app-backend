const weatherModel = require("../models/weather.model")

const SaveWeather = async (obj) => {
    return await obj.save()
}

module.exports = {
    SaveWeather
}