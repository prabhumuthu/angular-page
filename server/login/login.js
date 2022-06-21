//import db connection
var conn = require("../config/db_connection");
//import generate token
var g_token = require("../token/generateToken");
//import db properties
var prop = require("../config/db_properties");
//import the express module
var express = require("express");
//create the Router instance
//Router used to create the module
var router = express.Router();
//create the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//create the post request 
router.post("/", function (req , res) {
    //var uname = "admin"
    var uname = req.body.uname;
    //var upwd = "admin"
    var upwd = req.body.uname;
    connection.query("select * from login_details where uname='"+uname+"'and upwd='"+upwd+"'",
                    function(err,recordsArray,fields){
                        
                        if(recordsArray.length>0){
                            var token = g_token(uname,
                                                upwd,
                                            'harsh');
                        prop.token = token;
                        res.send({
                            login:"success",
                            token:prop.token
                        })
                        }
                        else{
                            res.send({login:"failed "})
                        }
                    })
});
module.exports = router; 