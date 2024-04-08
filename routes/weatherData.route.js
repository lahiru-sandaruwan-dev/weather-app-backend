const express = require("express");
const WeatherRoute = express.Router();
const { GetWeatherData, SaveWeatherData } = require("../controllers/weather.controller");

/**
 * @swagger
 * components:
 *  schemas:
 *    Weather:
 *      type: object
 *      required:
 *          - id
 *          - district
 *          - temperature
 *          - humidity
 *          - airPressure
 *          
 *      properties:
 *          id:
 *              type: INTEGER
 *              description: Auto generated ID,
 *          district:
 *              type: STRING
 *              description: District name
 *          temperature:
 *              type: FLOAT
 *              description: Temperature of district
 *          humidity:
 *              type: FLOAT
 *              description: Humidity of district
 *          airPressure:
 *              type: FLOAT
 *              description: Air Pressure of district
 *          createdAt:
 *              type: DATETIME
 *              description: Created Date
 *          updatedAt:
 *              type: DATETIME
 *              description: Updated Date
 *      example:
 *          id: 1,
 *          district: Colombo
 *          temperature: 32.1212°C
 *          humidity: 50%
 *          airPressure: 1000hPa
 *          createdAt: 2024-04-07 10:20:00
 *          updatedAt: 2024-04-07 10:20:00
 */

/**
 * @swagger
 * tags:
 *      name: Weather
 *      description: The Weather managing API
 */

/**
 * @swagger
 * /api/weather:
 *      get:
 *          summary: Return the list of latest weather data
 *          tags: [Weather]
 *          responses:
 *              200:
 *                  description: The lis of the weather data
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Weather'
 */

WeatherRoute.get("/", GetWeatherData);

/**
 * @swagger
 * /api/weather/save:
 *  post:
 *      summary: Save weather data
 *      tags: [Weather]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Weather'
 *      responses:
 *          200:
 *              description: The weather data successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Weather'
 */

WeatherRoute.post("/save", SaveWeatherData)

module.exports = WeatherRoute;
