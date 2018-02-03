/**
 * This file describes the route to get the latest (most recent) data from the database.
 */
const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const logger = require('../logger');
const mysql = require('mysql');
const { connection, connectMySQL } = require('../mysql-connection');
const { DATABASE, NODE_TABLE, SENSOR_TABLE } = require('../database-config');



/* GET latest data */
router.get('/', (req, res, next) => {
    // promise for selecting all from the node_info table
    const getNodeInfo = new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${NODE_TABLE}`;
        connection.query(sql, (err, nodeInfoData) => {
            if (err) reject(err);
            resolve(nodeInfoData);
        });
    });
    /** 
     * Returns a promise that attaches the latest data for a node to its node info 
     */
    const attachLatestData = (nodeInfo) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM ${SENSOR_TABLE} WHERE id=${nodeInfo.id} ORDER BY date, time DESC LIMIT 1`;
            connection.query(sql, (err, sensorData) => {
                if (err) reject(err);
                // combine the info for the node. use sensorData[0] because this query returns an array with a single entry 
                const combinedData = Object.assign(nodeInfo, sensorData[0]);
                resolve(combinedData);
            });
        });
    }

    // connect to mysql, then see what nodes are in the database
    // connectMySQL.then((message) => {
    //     logger.verbose(message);
    //     return getNodeInfo;
    // })
    getNodeInfo
        // with the nodes present in the database, use each one's ID to get its latest sensor data
        .then((nodeInfoData) => {
            // debug
            logger.debug('RESULTS FROM NODE INFO: ');
            nodeInfoData.forEach(row => {
                logger.debug(JSON.stringify(row, null, '\t'));
            });

            let dataPromises = nodeInfoData.map(info => {
                return attachLatestData(info);
            })
            // promise.all ensures all the latest data is queried and the connection closed before moving on
            return Promise.all(dataPromises);
        })
        // take the latest entry for each node and write it to the webpage
        .then((latestData) => {
            // end the MySQL connnection
            // connection.end((err) => {
            //     if (err) logger.debug("Can't close MySQL connection! It may have already quit.");
            //     logger.debug('MySQL connection closed successfully.');
            // });

            logger.debug('RESULTS FROM LATEST DATA PER NODE: ');
            latestData.forEach(row => {
                logger.debug(JSON.stringify(row, null, '\t'));
            });

            res.status(200).json(latestData);
        });
})

module.exports = router;