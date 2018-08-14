// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
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
		//console.log(cols);
		//console.log(cols.length);
		//console.log(vals);
		//console.log(vals.length);
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES ('";
		queryString += vals.toString();
		queryString += "') ";

		//console.log(queryString);

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
