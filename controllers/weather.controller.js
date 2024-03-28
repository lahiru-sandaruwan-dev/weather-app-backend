const Response = require("../utils/response")
const emitDataPointEveryFiveMinutes = require("../weather_data_generator")
const mongoose = require("mongoose")
const weatherModel = require("../models/weather.model")
const weatherService = require("../services/weather.service")
const { StatusCodes } = require("http-status-codes")

const getWeatherData = async (req, res) => {
    emitDataPointEveryFiveMinutes()
        .then(dataPoints => {
            // console.log(dataPoints);
            const weather = new weatherModel(dataPoints);
            const updatedWeather = weatherService.SaveWeather(weather);
            // return Response(res, StatusCodes.CREATED, true, "Update Successful", updatedWeather);
            return Response(res, 201, true, "Success", updatedWeather)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// async function saveWeatherData() {
//     try {
//         const dataPoints = await emitDataPointEveryFiveMinutes();
//         const weather = new weatherModel(dataPoints);
//         const updatedWeather = await weatherService.SaveWeather(weather);
//         return Response(res, StatusCodes.CREATED, true, "Update Successful", updatedWeather);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// saveWeatherData()

module.exports = {
    getWeatherData
}