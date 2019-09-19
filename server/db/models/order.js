const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0
  },
  notes: {
    type: Sequelize.STRING(1234),
    allowNull: false,
    defaultValue: null
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Other'
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Pending'
  }
})

module.exports = Order
