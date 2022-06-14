'use strict'

const { Router } = require('express')
const db = require('./pg-tools')

// TODO
// Get rid of this once the whole migration to pg is done!
let heroList = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]

const router = Router()

// TODO
// Implement the next endpoints using postgres
// Use this example to do the rest of the endpoints

router.get('/heroes', (req, res) => {
  db.query('SELECT * FROM heroes', (err, results) => {
    if (err) {
      res.status(500)
      res.send(err.message)
    } else {
      res.send(results.rows)
    }
  })
})

router.get('/heroes/:heroId', (req, res) => {
  // Should respond with the hero associated with the `heroId`
  // hint: use `req.params.heroId`
  db.query(`SELECT * FROM heroes WHERE id = ${req.params.heroId}`, (err, record) => {
    if (!err) {
      res.json(record.rows[0])
    } else {
      res.status(404)
      res.send('Hero not found')
    }
  })
})

router.post('/heroes', (req, res) => {
  // Should append a new hero
  // hint: use `req.body` to get the hero information
  db.query(`INSERT INTO heroes(name) VALUES('${req.body.name}')`, (err, record) => {
    if (!err) {
      res.status(201)
      res.json({ id: 'Loading...', name: req.body.name })
    } else {
      res.status(500)
      res.end(err.message)
    }
  })
})

router.delete('/heroes/:heroId', (req, res) => {
  // Should delete a hero associated with `heroId`
  // hint: use `req.params.heroId`
  db.query(`DELETE FROM heroes WHERE id = ${req.params.heroId}`, (err, record) => {
    if (!err) {
      res.status(204)
      res.end()
    } else {
      res.status(500)
      res.end(err.message)
    }
  })
})

router.put('/heroes', (req, res) => {
  // Should update a hero
  // hint: use `req.body` to get the hero information
  db.query(`UPDATE heroes SET name = '${req.body.name}' WHERE id = ${req.body.id}`, (err, record) => {
    if (!err) {
      res.status(204)
      res.end()
    } else {
      res.status(500)
      res.end(err.message)
    }
  })
})

// TODO
// Export this and make it work with `server.js`
// Hint: `module.exports`
module.exports = router
