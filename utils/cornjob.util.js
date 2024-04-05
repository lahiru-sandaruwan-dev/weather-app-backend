const scheduler = require('node-schedule');
const { testWeatherDataGenerateFunc } = require('../weather_data_generator');

const cronJob = (cronTime, callback) => {
    scheduler.scheduleJob(cronTime, callback);
};


const sendWetherDataToSubscriber = () => {
    cronJob("*/30 * * * * *", async () => {
        console.log("Appointment reminder cron job running...");
        console.log(testWeatherDataGenerateFunc())
        console.log("Appointment reminder cron job over...");
    })
}



module.exports = sendWetherDataToSubscriber