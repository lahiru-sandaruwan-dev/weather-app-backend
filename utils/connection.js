const mongoose = require("mongoose")
const url = process.env.MONGO_DB_URL

const Connection = () => {
    mongoose.connect(url)
        .then(() => {
            console.log("Database Connected!")
        }).catch((err) => {
            console.log(`Database Connected Error ${err}`)
        })
}

module.exports = Connection