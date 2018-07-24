var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },
    create: function(col, val, cb) {
        orm.create("burgers", col, val, function(res) {
            cb(res);
        });
    },
    update: function(vals, condition, cb) {
        orm.update("burgers", vals, condition, function(res) {
            cb(res);
        });
    }
}; // object ends

module.exports = burgers;