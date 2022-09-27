const Sequelize = require('sequelize')
require("dotenv").config();
const db= new Sequelize(process.env.DB_NAME, null, null,{
    host: 'localhost',
   dialect: 'postgres',
    logging: false
})

module.exports= db;