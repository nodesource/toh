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
  db.query('SELECT * FROM heroe', (err, results) => {
    if (err) {
      res.status(500)
      res.send(err.message)
    } else {
      res.send(results)
    }
  })
})

router.get('/heroes/:heroId', (req, res) => {
  // Should respond with the hero associated with the `heroId`
  // hint: use `req.params.heroId`
  const foundHero = heroList.find(hero => hero.id == req.params.heroId)
  if (foundHero) {
    res.send(foundHero)
  } else {
    res.status(404)
    res.send('Hero not found')
  }
})

router.post('/heroes', (req, res) => {
  // Should append a new hero
  // hint: use `req.body` to get the hero information
  const { name } = req.body
  const lastId = heroList[heroList.length - 1].id
  const newHero = { name, id: lastId + 1 }
  heroList.push(newHero)
  res.status(201)
  res.end(JSON.stringify(newHero))
})

router.delete('/heroes/:heroId', (req, res) => {
  // Should delete a hero associated with `heroId`
  // hint: use `req.params.heroId`
  const newHeroList = heroList.filter(hero => hero.id == req.params.heroId)
  heroList = newHeroList
  res.status(204)
  res.end()
})

router.put('/heroes', (req, res) => {
  // Should update a hero
  // hint: use `req.body` to get the hero information
  const indexElement = heroList.findIndex(hero => hero.id === req.body.id)
  if (indexElement !== -1) {
    res.status(204)
    heroList[indexElement] = { ...heroList[indexElement], name: req.body.name }
    res.end()
  } else {
    res.status(404)
    res.end('Hero not found')
  }
})

// TODO
// Export this and make it work with `server.js`
// Hint: `module.exports`
module.exports = router
