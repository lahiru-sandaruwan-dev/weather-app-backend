const express = require("express")
require("dotenv").config()
const Connection = require("./utils/connection")
const app = express()
require("express-async-errors")
const cors = require("cors")
const mongoose = require("mongoose")
const errorHandleMiddleware = require("./errors/error.middleware")

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
    Connection()
})