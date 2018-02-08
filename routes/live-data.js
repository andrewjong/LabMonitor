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

/* GET latest data for all nodes */
router.get('/', (req, res, next) => {
    /**
     * Returns an array containing all the node metainfo, i.e. nodeid, owner, description. 
     * 
     * @returns {Promise.<Object[]>} array containing an object representing each node's metainfo
     */
    const getNodeInfo = new Promise((resolve, reject) => {
        // get all the data from the node table.
        const sql = `SELECT * FROM ${NODE_TABLE}`;
        connection.query(sql, (err, nodeInfoData) => {
            if (err) reject(err);
            resolve(nodeInfoData);
        });
    });
    /** 
     * Extends an object containing a node's metainfo by adding the latest data for that node.
     * 
     * @param {Object} nodeInfo contains metainfo about a node that includes the node's id (nodeInfo.id).
     * @returns {Promise.<Object>} an object containing metainfo and the latest data for that node's id
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

    // first get a list of all the nodes registered in the database
    getNodeInfo
        .then((nodeInfoData) => {
            // debug, print each array element on a new line
            logger.debug('RESULTS FROM NODE INFO: ');
            nodeInfoData.forEach(row => {
                logger.debug(JSON.stringify(row, null, '\t'));
            });

            // with the node info object, use each one's ID to attach its latest sensor data
            let dataPromises = nodeInfoData.map(info => {
                return attachLatestData(info);
            })
            // promise.all ensures all the latest data is queried and the connection closed before moving on
            // returns an array
            return Promise.all(dataPromises);
        })
        // take the latest entry for each node and write it to the webpage
        .then((latestData) => {
            // debug
            logger.debug('RESULTS FROM LATEST DATA PER NODE: ');
            latestData.forEach(row => {
                logger.debug(JSON.stringify(row, null, '\t'));
            });

            // send json to the client, an array of objects
            res.status(200).json(latestData);
        });
})

module.exports = router;