'use strict'

const PORT = process.env.PORT || 5000
const app = require('express')()

app.listen(PORT, () => console.log(`App listening in port: ${PORT}`))
