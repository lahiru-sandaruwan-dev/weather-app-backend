const Response = require("../utils/response")
const weatherData = require("../weather_data_generator")

const getWeatherData = async (req, res) => {
    let array = []
    array.push(weatherData)
    await console.log(array)

    return Response(res, 201, true, "Success", array)
}

module.exports = {
    getWeatherData
}