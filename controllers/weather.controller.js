const { StatusCodes } = require("http-status-codes");
const CustomResponse = require("../utils/response");
const sequelize = require("../config/database.config");
const weatherService = require("../services/weather.service");
const { generateWeatherData } = require("../weather_data_generator");

const GetWeatherData = async (req, res) => {
    const latestWeatherData = await weatherService.FindAllLatest();

    CustomResponse(res, StatusCodes.OK, true, "", latestWeatherData);
};

const SaveWeatherData = async (req, res) => {
    req.body = generateWeatherData()
    const weatherData = req.body

    let newDataArr = [];

    weatherData.forEach((data) => {
        let newData = {
            id: 0,
            district: data.district,
            temperature: data.temperature,
            humidity: data.humidity,
            airPressure: data.airPressure,
        };

        newDataArr.push(newData);
    });

    const transaction = await sequelize.transaction();

    try {
        const savedWeatherData = await weatherService.SaveMany(
            newDataArr,
            transaction
        );

        await transaction.commit();

        // Send success response with the saved weather data
        CustomResponse(res, StatusCodes.OK, true, "Weather data successfully saved", savedWeatherData);
    } catch (error) {
        await transaction.rollback();
        // Send error response if an error occurs
        CustomResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, false, "Failed to save weather data", error.message);
    }
}


module.exports = {
    GetWeatherData,
    SaveWeatherData
};
