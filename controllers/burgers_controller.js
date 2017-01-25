var express = require('express');
var router = express.Router();

var burger = require('./../models/burger.js');

//routes on routes on routes
router.use(express.static('public'));



router.get('/', function(request, response){
    burger.getBurgers(function(data){
        // var hbsObject = {
        //     burgers: data
        // };
        // console.log(hbsObject)
        // console.log('error at router.get')
        response.render('index', { burgers: data});
    });
});

router.post('/', function(request, response){
    burger.addBurger(request.body.burger_name, function(){
        console.log('error at router.post')
        response.redirect('/');
    });
});

router.put('/:id', function(request, response){
    burger.devourBurger(request.params.id, function(){
       console.log('error at router.put')
        response.redirect('/');
    });
});

//export
module.exports = router;