const Sequelize = require('sequelize')
const db = require('../db')

const Customer = db.define('customer', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null
  }
})

module.exports = Customer
