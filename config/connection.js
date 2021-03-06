var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'burgers_db'
});
}
//make connection
connection.connect(function(err) {
    if (err){
        console.error('error connecting: oooppsss' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//export connection for ORM use.
module.exports = connection;