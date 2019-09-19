const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const account = await Order.findAll()
    res.json(account)
  } catch (err) {
    next(err)
  }
})
