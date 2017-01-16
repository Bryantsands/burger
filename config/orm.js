//import mysql connection.
var connection = require('../config/connection.js');

var orm = {
    selectAll: function(table, callback){
        var queryString = 'SELECT id, burger_name, devoured, date FROM ??';
        connection.query(queryString, function(err,result){
            if (err){
                throw err;
            }
            callback(data);
        });
    },
    insertOne: function (table, burgerName, callback){
        var queryString = 'INSERT INTO id, burger_name, VALUE ';
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            callback(data);
        })
    },
    updateOne: function (table, id, burgerName, value, callback){
        var queryString = 'UPDATE TABLE, SET ? WHERE ?';
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            callback(data);
        })
    }
}
    module.exports = orm;

