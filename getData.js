
var fs = require("fs");
var users = [];

var logs = function() {
fs.readFile("log.txt", "utf8", function(error, data) {
	if (error) {
		return console.log(error);
	}
	// console.log(data);
	users.push(data);
	// return users;
	console.log(users[0])

})
}

// logs();
// console.log(users);
module.exports = logs();
