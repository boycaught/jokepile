/* -----------------------------------------------------------------------

 Authenticat Operations

 ------------------------------------------------------------------------ */

/**
 * User: larry_green
 * Date: 5/15/2018
 * Time: 11:00 PM
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Authentication', message: 'Authentication, access and identity services' });
});

module.exports = router;
