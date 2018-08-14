var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        console.log(cols, "---------------")
        console.log(vals, "---------------",  typeof(vals))
        orm.insertOne("burgers", cols, vals, function(result) {
            cb(result);
        });
    },
    updateOne: function(object, where, cb){
        orm.updateOne("burgers", object, where, function(result) {
            cb(result);
        });
    }
}; // object ends

module.exports = burger;