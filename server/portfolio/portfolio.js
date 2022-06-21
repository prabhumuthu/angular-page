//importing db properties for token
var prop = require("../config/db_properties");
//importy fs module
var fs = require("fs")
//import express module
var express = require("express");
//create the router instance
var router = express.Router();
//create the post rest api
router.post("/", function (req, res) {
    
    var token = req.body.token;
    
    if (token == prop.token) {

       fs.readFile("../../static/sample.json",function(err,data){
            res.send(data);
            if(err)
            console.log("errror while fetching data from sample file");
            else
            console.log("data fetched successfully")
            
        })
    }
    else{
        res.send("Unauthorised user");
    }
})
module.exports = router;
