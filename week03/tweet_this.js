var request = require('request');
var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'PUT_YOUR_CONSUMER_KEY_HERE',
    consumerSecret: 'PUT_YOUR_CONSUMER_SECRET_HERE'
});
var accessToken = "PUT_YOUR_ACCESS_TOKEN_HERE";
var accessTokenSecret ="PUT_YOUR_ACCESS_TOKEN_SECRET_HERE";
		
twitter.statuses("update", {
    status: "Tweet test."
},
    accessToken,
    accessTokenSecret,
    function(error, data, response) {
        if (error) {
            // something went wrong
        } else {
            // data contains the data sent by twitter
        }
    }
);



