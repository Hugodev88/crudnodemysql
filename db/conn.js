const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '8515792653Morph*',
    database: 'nodemysql2'
})

module.exports = pool