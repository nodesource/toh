'use strict'

const PORT = process.env.PORT || 5000
const app = require('express')()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const heroesApiRoutes = require('./hero-api-routes')

const isProd = process.env.NODE_ENV == 'production'

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (isProd) {
  app.use(require('express').static(path.join(__dirname, '..', 'dist')))
}

app.use('/api', heroesApiRoutes)

app.listen(PORT, () => console.log(`App listening in port: ${PORT}`))
