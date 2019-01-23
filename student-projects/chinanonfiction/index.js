var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// run using "node index.js"
// makes a file called output.tsv

var url = "http://www.chinanonfiction.com";

request(url, function(error, response, body){
    
    var $ = cheerio.load(body);
    
    var set = [];
    
    var story;
    
    var output = "title\tcontent\n";
    
    console.log("title\tcontent");
    
    $('article').each(function(i, elem){
    
        story = cheerio.load(this);
        
        var title = story('h2').text().trim();
        var content = story('.entry-summary').text().trim();
        console.log(title + "\t" + content);
        
        output += title + "\t" + content + "\n";
        
    });
    
    fs.writeFile("output.tsv", output, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
});
    
    
});