const Sequelize = require('sequelize')
const sequelize = require('../database/dbConnection')

module.exports = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    email: {
        unique: true,
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true
});