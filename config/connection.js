//create connection to mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password",
  database: "burger_db",
  debug: "false"
});

//make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection to orm 
module.exports = connection;
