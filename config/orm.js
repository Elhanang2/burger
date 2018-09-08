var connection = require("./connection.js");


function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
var orm={
    all:function(tablename,cb){
        var query="select * from "+ tablename+";";
        connection.query(query,function(err,result){
            if(err) {throw err;}
            cb(result);
            console.log(result);
        });
        
    },
    create: function(table,col,vals,cb){
        var query = "insert into "+ table +"("+col.toString()+")" ;

            query += "values (";
            query += printQuestionMarks(vals.length);
            query += ")";
            console.log(query);

        connection.query(query,vals,function(err,result){
            if(err){throw err;}
             cb(result);
            console.log(result);
        });
    },
    update: function(table,objColVals, condition,cb){
        var query = "update "+ table;
        query+= " set ";
        query += objToSql(objColVals);
        query += " where ";
        query += condition;
        console.log(query);
        connection.query(query, function(err, result){
            if(err){throw err;}
             cb(result);
            console.log(result);
        });
    }

};
//  orm.create("burgers",["burger_name","devoured"],["tuna piza",false]);
// orm.update("burgers",{"burger_name":"tuna burger"},"id="+4);
// orm.all("burgers");


module.exports = orm;
