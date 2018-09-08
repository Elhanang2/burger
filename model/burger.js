var orm = require("../config/orm.js");

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



module.exports=burger;