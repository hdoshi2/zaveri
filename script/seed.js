'use strict'

const db = require('../server/db')
const {User, Customer, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const customers = await Promise.all([
    Customer.create({
      firstName: 'Tom',
      lastName: 'Brady',
      email: 'tommy@email.com',
      phone: '2123551220'
    }),
    Customer.create({
      firstName: 'Bill',
      lastName: 'Smith',
      email: 'billSmith@email.com',
      phone: '6304005766'
    })
  ])

  const orders = await Promise.all([
    Order.create({
      orderName: 'Fix ring',
      price: 59.99,
      notes:
        'You might think that all diamonds are the same, but if you look at a stone really hard, you will start to notice some characteristics that make it different from others.',
      type: 'Repair',
      status: 'Pending',
      customerId: 1
    }),
    Order.create({
      orderName: 'Buy new ring',
      price: 300.5,
      notes: 'Purchased engagement ring',
      type: 'New Item',
      status: 'Closed',
      customerId: 2
    }),
    Order.create({
      orderName: 'Buy new necklace',
      price: 2320.78,
      notes: 'Purchased diamond necklace',
      type: 'New Item',
      status: 'Closed',
      customerId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${customers.length} customers`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
