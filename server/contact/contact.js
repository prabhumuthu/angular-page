//import the express
var express = require("express");
//import the mongodb
var mongodb = require("mongodb");
//import the db properties
var prop = require("../config/db_properties");
//create the the router 
var router = express.Router();
//create the mongo cliet
var client = mongodb.MongoClient;
var url="mongodb://localhost:27017/poc"
//create the post rest api
router.post("/",function(req,res){
    var token = req.body.token;
    if(token == prop.token){
        client.connect(url,function(err,db){
                        db.collection("products").find().toArray((err,array)=>{
                        res.send(array);
            });
        })
    }
    else{
        res.send("Unauthorised user");
    }
})
//export the router
module.exports = router;