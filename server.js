const express = require("express");
require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const errorHandleMiddleware = require("./errors/error.middleware");
const sequelize = require("./config/database.config");
const Constant = require("./utils/constants");
const WeatherRoute = require("./routes/weatherData.route");
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
// const {
//     saveDataInDBTask,
// } = require("./utils/scheduleTask.util");

// const { app, server } = require("./config/socket.config");
const { sendWetherDataToSubscriber } = require("./utils/cornjob.util");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Weather Data Generator API",
            version: "1.0.0",
            description: "A simple Express Weather Generator API"
        },
        servers: [
            {
                url: "https://weather-app-backend-ry03.onrender.com"
            }
        ],
    },
    apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.use('/swagger-docs', swaggerUI.serve, swaggerUI.setup(specs))
// app.use(Constant.API.PREFIX.concat("/weather"), WeatherRoute);
app.get('/', (req, res) => {
    res.json({ message: "Weather Data On Map" })
})

app.use("/api/weather", WeatherRoute);

app.use(errorHandleMiddleware);

// saveDataInDBTask();
sendWetherDataToSubscriber()

// const start = async () => {
//     const port = process.env.PORT || 5000;
//     try {
//         server.listen(port, () => {
//             console.log(`SERVER IS LISTENING ON PORT ${port}..!`);
//             sequelize.authenticate();
//         });
//     } catch (e) {
//         console.log(e);
//     }
// };

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    sequelize.authenticate();
});

// start();
