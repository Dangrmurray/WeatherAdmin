var newUser = require("./userSearch.js");
console.log(newUser)


var weather = require('weather-js');

// var test = new newUser("frank", "Hayward CA")
// Options: 
// search:     location name or zipcode 
// degreeType: F or C 
 
weather.find({search: process.argv[2] + process.argv[3], degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});