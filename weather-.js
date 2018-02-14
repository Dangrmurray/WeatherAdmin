var Student = require("./userSearch.js");


var weather = require('weather-js');
 
// Options: 
// search:     location name or zipcode 
// degreeType: F or C 
 
weather.find({search: UserSearch.location, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});