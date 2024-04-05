const { StatusCodes } = require("http-status-codes");
const CustomResponse = require("../utils/response");
const sequelize = require("../config/database.config");
const weatherService = require("../services/weather.service");

const GetWeatherData = async (req, res) => {
    const latestWeatherData = await weatherService.FindAllLatest();

    CustomResponse(res, StatusCodes.OK, true, "", latestWeatherData);
};

module.exports = {
    GetWeatherData,
};
