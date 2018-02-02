const mysql = require('mysql');
const { DATABASE, NODE_TABLE, SENSOR_TABLE } = require('./database-config');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: DATABASE
});
// promise for creating a MySQL connection
connection.connect();

// const connectMySQL = new Promise((resolve, reject) => {
//     connection.connect((err) => {
//         if (err) throw err;
//         resolve('MySQL connected successfully');
//     })
// });

module.exports = {
    connection,
    // connectMySQL
}