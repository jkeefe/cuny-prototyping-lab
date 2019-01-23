var request_node = require('request');
var cheerio = require('cheerio');
var moment = require('moment');

module.exports = function(request) {
  
    return new Promise(function(resolve, reject){

        var date = moment().utcOffset(-4).format("YYYY[/]MM[/]DD");
        var url = "https://www.nytimes.com/aponline/" + date + "/us/ap-history.html";

        // functional code goes in here
        request_node(url, function(error, response, body){
        
            var $ = cheerio.load(body);
            
            var set = [];
            var setup = "";
            var highlight = "";
            var grab_next_paragraph = false;
            
            // grab all of the paragrahs (<p>..</p>) by the 'p' selector
            $('p').each(function(i, elem){
        
                var current_paragraph = $(this).text();
                
                if (current_paragraph.match(/^Today is/)) {
                    setup = current_paragraph;
                    return;
                }
                
                if (current_paragraph.match(/^Today's Highlight/)) {
                    grab_next_paragraph = true;
                    return;
                }
                
                if (grab_next_paragraph == true) {
                    highlight = current_paragraph;
                    grab_next_paragraph = false;
                    return;
                }
                
                if (current_paragraph.match(/^In \d\d\d\d/)) {
                    set.push($(this).text());
                    return;
                }
            
            });
        
            var extra = set[randomIntFromInterval(0,set.length)];
                
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