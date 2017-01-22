var orm = require('./../config/orm');

function addBurger(burger_name, callback){
    orm.insertOne('burgers', burger_name, function(result){
        // console.log('error at add burger');
        callback(result);
    });
}

function devourBurger(id, callback){
    orm.updateOne('burgers', parseInt(id), 'devoured', 1, function(result){
        // console.log('error at devourBurger');
        callback(result);
    });
}

function getBurgers(callback){
    orm.selectAll('burgers', function(result){
        // console.log('error at get burger');
        callback(result);
    });
}


module.exports = {
    addBurger: addBurger,
    devourBurger: devourBurger,
    getBurgers: getBurgers
};