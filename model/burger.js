//imported from orm 
var orm = require("../config/orm.js");

//functions interact with the database
var burger={
    all: function(cb){
        orm.all("burgers",function(res){
            cb(res);
        }); 
    },
    create: function(col,vals,cb){
        orm.create("burgers", col,vals, function(res){
            cb(res);
        });
    },
    update: function(colVals,condition,cb){
        orm.update("burgers",colVals,condition,function(res){
            cb(res);
        });
    }
     
};


//export the database function for the controller 
module.exports=burger;