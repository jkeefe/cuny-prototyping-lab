var request = require('request');

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson";

request(url, function(error, response, body){
    console.log(error);
    console.log(repsonse);
    console.log(body);
    console.log("hello");
});