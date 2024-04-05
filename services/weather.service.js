const Weather = require("../models/weather.model");
const { op } = require("sequelize");

const SaveMany = async (data, transaction) => {
    if (transaction) {
        return await Weather.bulkCreate(data, { transaction });
    } else {
        return await Weather.bulkCreate(data);
    }
};

const FindAllLatest = async () => {
    return await Weather.findAll({
        order: [["createdAt", "DESC"]],
        limit: 25,
    });
};

module.exports = {
    SaveMany,
    FindAllLatest,
};
