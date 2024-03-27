const express = require("express")
const WeatherController = require("../controllers/weather.controller")
const WeatherRoute = express.Router()

WeatherRoute.get("/getWeatherData" , WeatherController.getWeatherData)

module.exports = WeatherRoute