const router = require('express').Router()
const {Order, Customer} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const account = await Order.findAll({
      include: [{model: Customer}]
    })
    res.json(account)
  } catch (err) {
    next(err)
  }
})
