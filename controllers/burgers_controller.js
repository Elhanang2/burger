var express = require("express");
var router = express.Router();
var burger = require("../model/burger.js");

router.get("/index",function(req,res){
    burger.all(function(data){
        var burgertoeat={
            burgers : data
        };
        console.log("ggggggggggggggggggg"+burgertoeat);
        res.render("index", burgertoeat);
    });
});

router.post("/api/burgers",function(req,res){
    burger.create(["burger_name","devoured"],[req.body.burger_name,req.body.devoured],function(result){
        res.json({ id: result.Id });
        console.log("hhhhhhhhhhhhhhhhhhhhh"+result);
        // res.redirect("/index");
    });
});

router.put("/api/burgers/:id",function(req,res){
    var condition="id="+req.params.id;
    console.log(condition);
    burger.update({
        devoured: true},
        condition,
        function(result){
            if(result.changedRow ===0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
    
});
 module.exports=router;
