const express = require('express');
const csvdata = require('csvdata');
const router = express.Router();
const logger = require('../logger');
const mysql = require('mysql');
const { connection, connectMySQL } = require('../mysql-connection');
const { DATABASE, NODE_TABLE, SENSOR_TABLE } = require('../database-config');

router.get('/', (req, res) => {
    const getAllData = new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${SENSOR_TABLE}`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            // combine the info for the node. use sensorData[0] because this query returns an array with a single entry 
            resolve(results);
            // Store the database file as CSV
        });
    });
    // const csv = GET_CSV_DATA
    getAllData
        .then(data => {
            return csvdata.write('./sensordata.csv', data, {
                header: 'id,date,time,humidity,temp_ambient,temp_ir,carbon_monoxide,methane,hydrogen,sound,vibration,battery'
            });
        })
        .then(() => {
            res.download('./sensordata.csv');
        });
});

module.exports = router;
