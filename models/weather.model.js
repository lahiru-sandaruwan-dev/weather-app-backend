const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.config");

const Weather = sequelize.define(
    "Weather",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        temperature: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        humidity: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        airPressure: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

//Weather.sync({ force: true });

module.exports = Weather;
