const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso o sequelize!')
} catch (error) {
    console.log('Não foi possivel conectar: ', error)
}

module.exports = sequelize