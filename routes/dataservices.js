var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Data Services', message: 'Data services functions' });
});

module.exports = router;
