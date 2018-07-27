// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
	
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

// Object for all SQL statement functions.
var orm = {
	// Function that returns all table entries
	selectAll: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

	// Function that insert a single table entry
	insertOne: function(table, cols, vals, cb) {
		// Construct the query string that inserts a single row into the target table
		console.log(cols);
		console.log(cols.length);
		console.log(vals);
		console.log(vals.length);
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES ('";
		queryString += vals.toString();//printQuestionMarks(vals.length);
		queryString += "') ";

		console.log(queryString);

		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

	// Function that updates a single table entry
	updateOne: function(table, object, where, cb) {
		console.log(table, "---------------");
		console.log(object, "---------------");
		console.log(where, "---------------");
		// Construct the query string that updates a single entry in the target table
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(object);
		queryString += " WHERE ";
		queryString += where;

		console.log(queryString);

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	}
};

// Export the orm object for the model
module.exports = orm;
