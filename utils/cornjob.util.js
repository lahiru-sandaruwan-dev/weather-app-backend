const scheduler = require('node-schedule');
const { generateWeatherData } = require("../weather_data_generator");
const sequelize = require("../config/database.config");
const weatherService = require("../services/weather.service");

const cronJob = (cronTime, callback) => {
    scheduler.scheduleJob(cronTime, callback);
};


const sendWetherDataToSubscriber = () => {
    cronJob("*/5 * * * *", async () => {
        const weatherData = generateWeatherData();

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

        let createWeatherData;
        try {
            createWeatherData = await weatherService.SaveMany(
                newDataArr,
                transaction
            );

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    })
}



module.exports = { sendWetherDataToSubscriber }