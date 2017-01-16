var express = require('express')
var router = express.Router();

var burger = require('../models/burger')

//routes on routes on routes
router.use(express.static('public'));

router.get('/', function(req, res){
    burger.getBurgers(function(data){
        response.render('index', {burgers: data});
    });
});

router.post('/', function(req, res){
    burger.addBurgers(request.body.burger_name, function(){
        response.redirect('/')
    });
});

router.put('/:id', function(req, res){
    burger.devourBurger(request.params.id, function(){
        response.redirect('/');
    });
});

//export
module.exports = router;