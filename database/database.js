const Sequelize = require('sequelize')

const connection = new Sequelize('guiapress', 'root', 'Tabajara1982#', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection