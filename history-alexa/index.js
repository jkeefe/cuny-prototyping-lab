var request_node = require('request');
var cheerio = require('cheerio');

var url = "https://hosted.ap.org/article/045a0a7365e2403d9507ee97762cbb01/today-history";

module.exports = function(request) {
  
    return new Promise(function(resolve, reject){

        // functional code goes in here
        request_node(url, function(error, response, body){
        
            var $ = cheerio.load(body);
            
            var set = [];
            
            // grab all of the paragrahs (<p>..</p>) by the 'p' selector
            $('p').each(function(i, elem){
        
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
            resolve(answer);
        
        });

    });
  
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}