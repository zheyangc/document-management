var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users');
});

router.get('/:userId', function(req, res, next) {
  res.send('users' + req.params.userId);
});

router.post('')

module.exports = router;
