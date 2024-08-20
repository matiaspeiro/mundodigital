const mysql = require('mysql2');
require('dotenv').config();

const connection  = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'ecommerce_db'
});

connection.connect((error)=>{
    if (error) throw error;
    console.log('Conectado a las base de datos Mysql')
})

module.exports = connection;



