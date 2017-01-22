//import mysql connection.
var connection = require('./connection.js');


    function selectAll(table, callback){
        connection.query('SELECT id, burger_name, devoured, date FROM ??', [table], function(err,data){
            if (err){
                throw err;
                console.log('error at selectall')
            }
            callback(data);
        });
    }
    function insertOne(table, columns, values, callback){
        connection.query('INSERT INTO ?? (burger_name) VALUE (?);', [table, burger_name], function(err, data){
            if (err){
                 throw err;
            }
            callback(data);
        });
    }
    function updateOne(table, id, property, value, callback){
        connection.query('UPDATE ?? SET ?? = ? WHERE id = ?;' [table, property, value, id], function(err, data){
            if (err){
                throw err;
            }
            callback(data);
        });
    }

    module.exports = {
        selectAll: selectAll,
        insertOne: insertOne,
        updateOne: updateOne
    };

