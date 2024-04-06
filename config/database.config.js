const Sequelize = require("sequelize");
require("dotenv").config();

//connect to ms sql server
const sslOptions = {
    // Set this to true if you want to reject unauthorized connections
    rejectUnauthorized: false
};

const sequelize = new Sequelize(
    process.env.MYSQL_DB_NAME || "",
    process.env.MYSQL_DB_USER || "",
    process.env.MYSQL_DB_PASSWORD || "",
    {
        host: process.env.MYSQL_DB_HOST,
        dialect: "mysql",
        dialectOptions: {
            ssl: sslOptions,
            connectTimeout: 60000
        }
    }
);

//check connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

//export the connection
module.exports = sequelize;
