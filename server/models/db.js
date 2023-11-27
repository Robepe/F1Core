const mysql = require('mysql');
const dbConfig = require('../config/db.config');

// Create a connection to the Database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// Open MySQL Connection
connection.connect(error => {
    if (error) {
        console.log(error.message);
    } else {
        console.log("Conectado a la Base de Datos")
    }
})

module.exports = connection;