var request = require('request');
var cheerio = require('cheerio');

var url = "http://hosted.ap.org/dynamic/stories/H/HISTORY?SITE=AP";

module.exports = function(request) {
  
  return new Promise(function(fulfill, reject){

    // functional code goes in here
    request(url, function(error, response, body){
        
        var $ = cheerio.load(body);
        
        var set = [];
        
        $('.ap-story-p').each(function(i, elem){
        
            var current_paragraph = $(this).text();
            
            if (current_paragraph.match(/^.+ ago:/)) {
                return;
            }
            
            if (current_paragraph.match(/^Today's birth/i)) {
                return;
            }
            
            if (current_paragraph.match(/^Thought/i)) {
                return;
            }
            
            if (current_paragraph.match(/^©/i)) {
                return;
            }
            
            console.log("paragraph " + i + " = " + current_paragraph);
            console.log("----");
            
            set.push($(this).text());
            
        });
        
        var setup = set[1];
        var highlight = set[3];
        var extra = set[randomIntFromInterval(5,set.length)];
            
        var answer = {};
        answer.setup = setup;
        answer.highlight = highlight;
        answer.extra = extra;
        
        console.log(JSON.stringify(answer));
        
    });

  });
  
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}