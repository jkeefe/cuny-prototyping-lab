var request = require('request');
var cheerio = require('cheerio');

var url = "http://hosted.ap.org/dynamic/stories/H/HISTORY?SITE=AP";

request(url, function(error, response, body){
    
    var $ = cheerio.load(body);
    
    var set = [];
    
    $('.ap-story-p').each(function(i, elem){
    
        set.push($(this).text());
        
    });
    
    var random = Math.floor(Math.random() * set.length);
        
    console.log(set[random]);
    
});