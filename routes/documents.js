var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('get documents');
});

router.post('/', function(req, res) {
  res.send('post documents')
});

module.exports = router;
