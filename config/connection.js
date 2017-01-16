var mysql = require ('mysql');

var connection = mysql.createConnection({
    port: 3000,
    host: 'localhost',
    user:'root',
    password:'password',
    database:'burgers_db'
});

//make connection
connection.connect(function (err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//export connection for ORM use.
modeule.exports = connection;