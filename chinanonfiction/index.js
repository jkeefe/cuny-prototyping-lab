var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.chinanonfiction.com";

request(url, function(error, response, body){
    
    var $ = cheerio.load(body);
    
    var set = [];
    
    var story;
    
    console.log("title\tcontent");
    
    $('article').each(function(i, elem){
    
        story = cheerio.load(this);
        
        var title = story('h2').text().trim();
        var content = story('.entry-summary').text().trim();
        console.log(title + "\t" + content);
        
    });
    
    // var random = Math.floor(Math.random() * set.length);
        
    // console.log(set[random]);
    
});