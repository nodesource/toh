'use strict'

const { Client } = require('pg')

// TODO
// Move the client-base connection into a Pool of connections
// Refs: https://node-postgres.com/features/connecting
function query (string, callback) {
  const client = new Client({
    user: process.env.PGUSER || 'nsolid',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'heroes',
    password: process.env.PGPASSWORD || 'nsolid',
    port: process.env.PGPORT || 5432,
  })

  client.connect()
  client.query(string, (err, results) => {
    client.end()
    callback(err, results)
  })
}

module.exports = { query }
