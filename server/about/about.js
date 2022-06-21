var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
//import the express
var express = require("express");
var router = express.Router();
//import db_properties for matching of token
var prop = require("../config/db_properties");
//create the post request since frontend sending the token for verification purpose
router.post("/", (req, res)=>{
    
    var token = req.body.token;

    if(token == prop.token)
    {
        connection.query("select * from products",
                        function(err,recordsArray,fields){
                            res.send(recordsArray);
                        })
    }
    else{
        res.send("Unauthorised user");
    }
})
//export the router
module.exports = router;