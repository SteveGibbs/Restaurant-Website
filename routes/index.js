var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bondi Kitchen' });
});

router.get('/lunch',  function(req, res, next){
     res.render('lunch.hbs', { title: 'Lunch at Bondi Kitchen' });
});

router.get('/breakfast',  function(req, res, next){
    res.render('breakfast.hbs', { title: 'Breakfast at Bondi Kitchen' });
});

router.get('/dinner',  function(req, res, next){
    res.render('dinner.hbs', { title: 'Dinner at Bondi Kitchen' } );
});

router.get('/event',  function(req, res, next){
    res.render('event.hbs', { title: 'Events at Bondi Kitchen' });
});

router.get('/music',  function(req, res, next){
    res.render('music.hbs', { title: 'Music at Bondi Kitchen' });
});
router.get('/contact',  function(req, res, next){
    res.render('contact.hbs', { title: 'Contact Us at Bondi Kitchen' });
});

module.exports = router;
