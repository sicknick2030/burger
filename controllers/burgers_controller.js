var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    // console.log(index);
    res.render('index', hbsObject);
  });
});


// Create a New Burger
router.post('/burger/create', function (req, res) {
	burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured = false
  ], function(data) {
    
    res.redirect('/');
  });
});


// Devour a Burger
router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;