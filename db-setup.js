const db = require('./http-server/pg-tools')

db.query('CREATE TABLE IF NOT EXISTS heroes (id SERIAL, name TEXT);', (err, results) => {
  if (err) throw err

  console.log(results)
})
