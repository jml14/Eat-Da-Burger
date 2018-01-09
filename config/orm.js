var connection = require("./connection");
connection = connection.connection;

var exports = module.exports = {};

exports.selectAll = function(){
	connection.connect();
	select = 'SELECT * from burgers' + product_id
	connection.query(select, function (error, results, fields) {
  	if (error) throw error;
  	connection.end();
  	return results;
  	}
  	});
	connection.end();
	return;
}


exports.insertOne = function(){
	connection.connect();

	connection.end();
	return;
}


exports.updateOne = function(){
	connection.connect();

	connection.end();
	return;
}