const express = require('express');
const router = express.Router();
const logger = require('../logger');
const mysql = require('mysql');
const { connection, connectMySQL } = require('../mysql-connection');

router.get('/', (req, res) => {
    const getDataAsCSV = (nodeid) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM ${SENSOR_TABLE} WHERE id=${nodeInfo.id} ORDER BY date, time DESC LIMIT 1`;
            connection.query(sql, (err, sensorData) => {
                if (err) reject(err);
                // combine the info for the node. use sensorData[0] because this query returns an array with a single entry 

                // Store the database file as CSV
            });

        });
    }
    // const csv = GET_CSV_DATA
    connectMySQL.then(() => getDataAsCSV)
        .then()

    res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csv);

});

module.exports = router;
