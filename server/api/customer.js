const router = require('express').Router()
const {Customer} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const customer = await Customer.findAll()
    res.json(customer)
  } catch (err) {
    next(err)
  }
})
