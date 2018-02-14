var fs = require("fs");

var UserSearch = function(name, location){
	this.name = name;
	this.location = location;
	this.date = Date.now();
	this.sendData = function(){
		var newUser = UserSearch.name + UserSearch.location;

		fs.appendFile(textFile, newUser, function(err){

		if (err){
			console.log(err);
		}
		else{
			console.log("Data Sent");
	}
});

	}

};





module.exports = UserSearch;