var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var urlencoderParser = bodyParser.urlencoded({ extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/quanlydethi',function(req,res,next){
  res.render('quanlydethi');
});

router.get('/taodethi',function(req, res, next){
  res.render('taodethi');
});
module.exports = router;
