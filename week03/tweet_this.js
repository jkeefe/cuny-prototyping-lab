var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 's5LIn7UwdFHWmXbakgI9bChmW',
    consumerSecret: 'FmObL5YO4BVSUZHmnRgpHdEyxePGTZ3RcTi3n1L3qxX7tVQAJK'
});
var accessToken = "66575819-K1sOxIiezTvJMtiqQgvbpZ4svseHDAqOSlKm4XWKg";
var accessTokenSecret ="kquzJOZEc9eRtb2Zw5miTPNbWg6bP5QUxI4NQtr36CHQI";
		
twitter.statuses("update", {
    status: "Hello world from the CUNY 2018 Prototyping class."
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



