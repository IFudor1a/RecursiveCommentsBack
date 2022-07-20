const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    "gts",
    "postgres",
    "Aa1234",
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);