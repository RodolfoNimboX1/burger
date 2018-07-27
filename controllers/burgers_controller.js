var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

// All routes set up with the logic

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name, '-----------', typeof(req.body.burger_name))
    burgers.insertOne('burger_name', req.body.burger_name, function(result) {
        console.log(result);
        res.json({ id: result.insertId });
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition: " + condition);

    burgers.updateOne(
        {
            devoured: true
        }, condition, function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;
