// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  showAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  addBurger: function(colName, value, cb) {
    orm.insertOne("burgers", colName, value, function(res) {
      cb(res);
    });
  },
  updateDevoured: function(colToUpdate,boolean,whereField,value, cb) {
    orm.updateOne("burgers", colToUpdate, boolean, whereField, value function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
