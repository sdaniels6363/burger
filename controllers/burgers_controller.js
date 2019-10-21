var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.showAll(function (data) {
    var dbObject = {
      burgers: data
    };
    console.log(dbObject);
    res.render("index", dbObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.addBurger("burger_name", req.body.burgerName, function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.id }); // this will be stored in the data element of the devour button.
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burger.updateDevoured("devoured", "true", "id", req.params.id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
