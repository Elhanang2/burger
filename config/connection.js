//create connection to mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "Elhanang2",
  database: "burger_db"
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
