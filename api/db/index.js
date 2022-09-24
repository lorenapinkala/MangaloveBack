const Sequelize = require('sequelize')
const db= new Sequelize('manga', null, null,{
    host: 'localhost',
   dialect: 'postgres',
    logging: false
})

module.exports= db;