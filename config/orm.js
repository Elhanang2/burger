//impirt mysql connection 
var connection = require("./connection.js");

//function to create  question marks for create query
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
      
      if (Object.hasOwnProperty.call(ob, key)) {
        
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}
//object for all mysql function
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
            query += printQuestionMarks(vals.length);//function with array length
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

//export the orm object for model (burger.js)
module.exports = orm;
