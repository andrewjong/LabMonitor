const mysql = require('mysql');
const logger = require('./logger');
const { DATABASE, NODE_TABLE, SENSOR_TABLE } = require('./database-config');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: DATABASE
});
// promise for creating a MySQL connection
connection.connect(err => {
    if (err) {
        logger.error(`MySQL connection error: ${err}. 
        Please make sure MySQL is running.`);
    }
});

module.exports = {
    connection,
}