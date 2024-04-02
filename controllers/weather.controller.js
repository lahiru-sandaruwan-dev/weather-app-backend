const Response = require("../utils/response")
const emitDataPointEveryFiveMinutes = require("../weather_data_generator")
const mongoose = require("mongoose")
const weatherModel = require("../models/weather.model")
const weatherService = require("../services/weather.service")
const { StatusCodes } = require("http-status-codes")

// const getWeatherData = async (req, res) => {
//     let temp = []
//    await emitDataPointEveryFiveMinutes()
//         .then(dataPoints => {
//             dataPoints.forEach((item)=>{
//                 const weather = new weatherModel(item);
//                 temp.push(weather)
//             })
//             // return Response(res, StatusCodes.CREATED, true, "Update Successful", updatedWeather);
//         })

//         updatedWeather = []
//         for(i=0; i<=temp.length-1; i++){
//          let data=   await weatherService.SaveWeather(temp[i])
//          updatedWeather.push(data)
//         }


//         return Response(res, 201, true, "Success", updatedWeather)

//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// async function saveWeatherData() {
//     try {
//         const dataPoints = await emitDataPointEveryFiveMinutes();
//        const weather = new weatherModel(dataPoints);
//         const updatedWeather = await weatherService.SaveWeather(weather);
//         return Response(res, StatusCodes.CREATED, true, "Update Successful", updatedWeather);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// saveWeatherData()

const getWeatherData = async (req, res) => {
    let data = []

    data = emitDataPointEveryFiveMinutes.testWeatherDataGenerateFunc()


    return Response(res, 201, true, "Success", data)

        .catch(error => {
            console.error('Error:', error);
        });
}

module.exports = {
    getWeatherData
}