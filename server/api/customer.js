const router = require('express').Router()
const {Customer} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const customer = await Customer.findAll({
      order: [['lastName', 'DESC']]
    })
    res.json(customer)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCustomer = await Customer.create(req.body)
    res.status(201).send(newCustomer)
  } catch (err) {
    next(err)
  }
})
