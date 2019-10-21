var connection = require("./connection.js") // import mysql connection

var orm = {
    // retrieve all results from the database.
    selectAll: function(){
        var query = "SELECT * FROM burgers"
        connection.query(query, function(err, data){
            if (err) throw err;

            
        });
    },
    
    // add a new burger to the database.
    insertOne: function(){

    },

    // update the devoured status of a burger in the database.
    updateOne: function(){

    }
}

module.exports = orm;