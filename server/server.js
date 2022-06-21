//import the express
var express = require("express");
//import body parser to name the post parameter eg uname,upass
var bodyparser = require("body-parser");
//create the rest object or api
var app = express();


//enable cors for the communication bte diff port number
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//set the JSON object as MIME type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//import the login module
var login = require("./login/login")
app.use("/login", login);


//import the about module
var about = require("./about/about")
app.use("/about", about);

//import the contact module
var contact = require("./contact/contact")
app.use("/contact",contact);

//import the portfolio module
var portfolio = require("./portfolio/portfolio")
app.use("/portfolio",portfolio);


//assign the port number
app.listen(8080);
console.log("Server Listening to port number 8080");
