var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('detail', { title: '详情页' });
});

module.exports = router;
