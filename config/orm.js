var connection = require("./connection");
connection = connection.connection;

var exports = module.exports = {};

exports.selectAll = function(){
	connection.connect();
	var results = '';
	select = 'SELECT * from burgers_db.burgers;'
	connection.query(select, function (error, results, fields) {
  	results = results;
  	});

  	connection.end();
	return results;
}


exports.insertOne = function(name){
	connection.connect();

	var results = '';
	insert = 'insert into burgers_db.burgers (burger_name, devoured) values (' + name + 'False);'
	connection.query(insert, function (error, results, fields) {
  	});

  	select = 'select id from burgers_db.burgers where burger_name= ' + name
	connection.query(insert, function (error, results, fields) {
  	});

	connection.end();
	return (name, id);
}


exports.updateOne = function(name){
	connection.connect();
	update = 'update burgers_db.burgers set devoured = True where burger_name = ' + name
	connection.end();
	return;
}