const express = require('express');
const router = express.Router();
const logger = require('../logger')
const mysql = require('mysql')
const { connection, connectMySQL } = require('../mysql-connection');
const { DATABASE, NODE_TABLE, NODE_TABLE_FIELDS } = require('../database-config');

router.post('/add', (req, res, next) => {
  const values = [req.body.owner, req.body.equipment, req.body.description];
  if (values.length !== NODE_TABLE_FIELDS.length) res.status(400).send('Invalid query: Field length and values length do not match.')

  const sql = `INSERT INTO ${NODE_TABLE} (${NODE_TABLE_FIELDS.join(', ')}) VALUES (${values.join(', ')})`
  connection.query(sql, (err, results) => {
    if (err) {
      if (err.sqlMessage)  // client made invalid sql error
        res.status(400).send('Invalid query: ' + err.sqlMessage)
      else if (err.code === 'ECONNREFUSED')
        res.status(500).send('Server could not establish database connection.');
      else {
        res.status(500);
        logger.error(err);
      }
    } else {
      logger.debug(results);
    }
  });
});

router.post('/delete', (req, res, next) => {
  const sql = `DELETE FROM ${NODE_TABLE} WHERE id=${req.body.id}`
  connection.query(sql, (err, results) => {
    if (err) {
      if (err.sqlMessage)  // client made invalid sql error
        res.status(400).send('Invalid query: ' + err.sqlMessage)
      else if (err.code === 'ECONNREFUSED')
        res.status(500).send('Server could not establish database connection.');
      else {
        res.status(500);
        logger.error(err);
      }
    } else {
      logger.debug(results);
    }
  });
});

router.post('/edit', (req, res, next) => {
  const id = req.body.id;
  const owner = req.body.newOwner;
  const equipment = req.body.newEquipment;
  const description = req.body.newDescription

  // if at least one thing given to update
  if (owner || equipment || description) {
    const sql = `UPDATE ${NODE_TABLE} SET\
    ${' owner = ' + owner || ''}\
    ${' equipment = ' + equipment || ''}\
    ${' description = ' + description || ''}\
    WHERE id=${id}`
  }
});


module.exports = router;
