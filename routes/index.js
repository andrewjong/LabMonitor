const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const logger = require('../logger');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'labmonitor'
});

// get the latest data for each of the listed nodes
// number of nodes will come from node_info database


/* GET home page. */
router.get('/', function (req, res, next) {
  // promise for handling a MySQL connection
  const connectMySQL = new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) throw err;
      resolve('MySQL connected successfully');
    })
  });
  // promise for selecting all from the node_info table
  const getNodeInfo = new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM node_info';
    connection.query(sql, (err, nodeInfoData) => {
      if (err) reject(err);
      resolve(nodeInfoData);
    });
  });
  // returns a promise 
  const getLatestData = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM sensor_values WHERE id=${id} ORDER BY date, time DESC LIMIT 1`;
        connection.query(sql, (err, result) => {
          if (err) reject(err);
          // logger.debug(`Result for id ${id}:` + JSON.stringify(result));
          resolve(result);
        });
    });
  }
  // connect to mysql, then see what nodes are in the database
  connectMySQL.then((message) => {
    logger.verbose(message);
    return getNodeInfo;
  })
    // with the nodes present in the database, use each one's ID to get its latest sensor data
    .then((nodeInfoData) => {
      // debug
      logger.debug('RESULTS FROM NODE INFO: ');
      nodeInfoData.forEach(row => {
        logger.debug(JSON.stringify(row));
      });

      const nodeIDs = nodeInfoData.map(row => row.id);
      let promises = nodeIDs.map(id => {
        return getLatestData(id);
      });
      // promise.all ensures all the latest data is queried before moving on
      return Promise.all(promises);
    })
    // take the latest entry for each node and write it to the webpage
    .then((latestNodeData) => {
      logger.debug('RESULTS FROM LATEST DATA PER NODE: ');
      // logger.debug(JSON.stringify(latestNodeData));
      latestNodeData.forEach(row => {
        logger.debug(JSON.stringify(row));
      });
    })
    // close the sql connection
    .then((res) => {
      connection.end();
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;
