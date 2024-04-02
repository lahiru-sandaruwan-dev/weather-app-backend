const express = require("express")
require("dotenv").config()
const Connection = require("./utils/connection")
const app = express()
require("express-async-errors")
const cors = require("cors")
const mongoose = require("mongoose")
const errorHandleMiddleware = require("./errors/error.middleware")
const Constant = require("./utils/constants")

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

const UserRoute = require("./routes/user.route")
const WeatherRoute = require("./routes/weatherData.route")
const sendWetherDataToSubscriber = require("./utils/cornjob.util")

app.use(Constant.API.PREFIX.concat("/user"), UserRoute)
app.use(Constant.API.PREFIX.concat("/weather"), WeatherRoute)


sendWetherDataToSubscriber()





app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
    Connection()
})
