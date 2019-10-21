var connection = require("./connection.js") // import mysql connection

var orm = {
    // retrieve all results from the database.
    selectAll: function(table){
        var query = `SELECT * FROM ${table}`
        connection.query(query, function(err, data){
            if (err) throw err;
            return data;
        });
    },
    
    // add a new burger to the database.
    insertOne: function(table,colName,value){
        var query = `INSERT INTO ${table} (${colName}) VALUES ${value}`
        connection.query(query, [burgerName], function(err, data){
            if (err) throw err;
            return data;
        })
    },

    // update the devoured status of a burger in the database.
    updateOne: function(table,colToUpdate,boolean,whereField,value){
        var query = `UPDATE ${table} SET ${colToUpdate} = ${boolean} WHERE ${whereField}=${value}`;
        connection.query(query, [burgerName], function(err, data){
            if (err) throw err;
            return data;
        });

    }
}

module.exports = orm;