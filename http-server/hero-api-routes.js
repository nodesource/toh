'use strict'

const { Router } = require('express')

const heroList = [
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
// Implement the next endpoints
// Use the `heroList` array as your db

router.get('/heroes', (req, res) => {
  // Should list ALL THE HEROES
})

router.get('/heroes/:heroId', (req, res) => {
  // Should respond with the hero associated with the `heroId`
  // hint: use `req.params.heroId`
})

router.post('/heroes', (req, res) => {
  // Should append a new hero
  // hint: use `req.body` to get the hero information
})

router.delete('/heroes', (req, res) => {
  // Should delete a hero associated with `heroId`
  // hint: use `req.body` to get the hero information
})

router.put('/heroes', (req, res) => {
  // Should update a hero
  // hint: use `req.body` to get the hero information
})

// TODO
// Export this and make it work with `server.js`
// Hint: `module.exports`
