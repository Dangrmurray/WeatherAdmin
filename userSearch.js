var fs = require("fs");

var UserSearch = function(name, location){
	this.name = name;
	this.location = location;

}
var newUser = UserSearch.name + UserSearch.location;

fs.appendFile(textFile, newUser, function(err){

	if (err){
		console.log(err);
	}
	else{
		console.log("Content Added!");
	}
});


module.exports = UserSearch;