const express = require("express");
const WeatherRoute = express.Router();
const { GetWeatherData } = require("../controllers/weather.controller");

WeatherRoute.get("/", GetWeatherData);

module.exports = WeatherRoute;
