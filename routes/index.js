var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/food',  function(req, res, next){
     res.render('food.html');
});


module.exports = router;
