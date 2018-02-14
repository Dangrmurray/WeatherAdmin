
var fs = require("fs");
var users = [];

var logs = function(users) {
fs.readFile("log.txt", "utf8", function(error, data) {
	if (error) {
		return console.log(error);
	};
	users = data.split(", ");
	for (var i = 0; i < users.length; i++) {
	console.log(users[i]);
	};
})
}

module.exports = {
	logs: logs(),
}
