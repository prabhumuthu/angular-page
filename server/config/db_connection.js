//import mysql
var mysql = require("mysql");
//import db properties
var prop = require("../config/db_properties");
//export json object
module.exports = {
    getConnection: ()=> {
        return mysql.createConnection({
            host: prop.host,
            user: prop.user,
            password: prop.password,
            database: prop.database
        })
    }
}