const express = require('express');
const csvdata = require('csvdata');
const router = express.Router();
const logger = require('../logger');
const mysql = require('mysql');
const { connection, connectMySQL } = require('../mysql-connection');
const { DATABASE, NODE_TABLE, SENSOR_TABLE } = require('../database-config');

router.get('/', (req, res) => {
    let fileName = 'sensordata';
    const getAllData = (nodeid) => new Promise((resolve, reject) => {
        let sql = `SELECT * FROM ${SENSOR_TABLE}`;
        if (nodeid!='none' && nodeid >= 0) {
            logger.debug(`id provided, downloading for nodeid=${nodeid}.`)
            sql += ` WHERE id=${nodeid}`;
            fileName += `_node${nodeid}.csv`;
        } else {
            logger.debug(`No id provided, downloading all. nodeid=${nodeid}.`)
            fileName += `_all.csv`;

        }
        sql += ` ORDER BY ID, DATE, TIME`;

        connection.query(sql, (err, results) => {
            if (err) reject(err);
            // combine the info for the node. use sensorData[0] because this query returns an array with a single entry 
            resolve(results);
            // Store the database file as CSV
        });
    });
    // const csv = GET_CSV_DATA
    const nodeid = req.query.nodeid || 'none';
    logger.debug(JSON.stringify(req.query));
    getAllData(nodeid)
        .then(data => csvdata.write(fileName, data, {
                header: 'id,date,time,humidity,temp_ambient,temp_ir,carbon_monoxide,methane,hydrogen,sound,vibration,battery'
            })
        )
        .then(() => res.download(fileName));
});

module.exports = router;
