const mysql = require('mysql');
const config = require('config');

var connection = mysql.createPool({
    host: config.get('db_mysql.host'),
    user: config.get('db_mysql.user'),
    password: config.get('db_mysql.pass'),
    database: config.get('db_mysql.database'),
})

connection.getConnection(error => {
    if (error) throw error;
    console.log('success DB conection');
})

module.exports = connection;