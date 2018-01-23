const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "Andrew"
  }, {
  	id: 2,
  	username: "Emily"
  }]);
});

module.exports = router;
