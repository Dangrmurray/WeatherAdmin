var fs = require("fs");

var UserSearch = function(name, location){
	this.name = name;
	this.location = location;
	this.date = Date.now();
	// console.log(this.date)
	this.bio = function(){
		console.log(this.name)
		console.log(this.location)
	}
	this.sendData = function(){
		
		var newUser = this.name + " " + this.location + ", ";

		fs.appendFile("log.txt", newUser, function(err){

		if (err){
			console.log(err);
		}
		else{
			console.log("Data Sent");
	}

});

	}

};



// var frank = new UserSearch("Frank", "Hayward CA")
// frank.bio();
// frank.sendData();


module.exports = UserSearch;