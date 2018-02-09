/**
 * This file describes the route to download data from the database as csv files.
 */
const express = require('express');
const csvdata = require('csvdata');
const router = express.Router();
const logger = require('../logger');
const mysql = require('mysql');
const { connection, connectMySQL } = require('../mysql-connection');
const { DATABASE, NODE_TABLE, SENSOR_TABLE } = require('../database-config');

router.get('/', (req, res) => {
    // this is the file where we'll write the csv data. we'll append the '.csv' extension later
    let fileName = './data/sensordata';

    /**
     * Gets all the data for a specified node id.
     * @param {number} nodeid an integer for the node id. if this value is negative, it will default to returning the
     *  data for all nodes
     * @returns {Promise.<Object[]>} each element in the array is a row, that contains an object with properties for each field
     */
    const getAllData = (nodeid) => new Promise((resolve, reject) => {
        let sql = `SELECT * FROM ${SENSOR_TABLE}`;
        // if a valid positive node id
        if (nodeid != 'none' && nodeid >= 0) {
            logger.debug(`id provided, downloading for nodeid=${nodeid}.`)
            sql += ` WHERE id=${nodeid}`; // filter by the id
            fileName += `_node${nodeid}.csv`; // specify the node id in the file name
        }
        // not a valid positive id
        else {
            logger.debug(`No id provided, downloading all. nodeid=${nodeid}.`)
            fileName += `_all.csv`; // specify all data in the file name
        }
        sql += ` ORDER BY ID, DATE, TIME`; // append at the end because mysql requires it that way

        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });

    const nodeid = req.query.nodeid || 'none'; // if the get request specifies an id, use it - else none

    logger.debug(JSON.stringify(req.query));
    getAllData(nodeid)
        // write the data to the file we specified above
        .then(data => csvdata.write(fileName, data, {
            header: 'id,date,time,humidity,temp_ambient,temp_ir,carbon_monoxide,methane,hydrogen,sound,vibration,battery'
        }))
        // download it to the client
        .then(() => res.download(fileName));
});

module.exports = router;
