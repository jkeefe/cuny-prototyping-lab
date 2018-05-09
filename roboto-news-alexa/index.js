const Alexa = require('alexa-sdk');
const Tabletop = require('tabletop');
const fuzz = require('fuzzball');


// The Google spreadsheet must be "Published" -- which is NOT the same as
// sharing it publicly! (For reals.) Go to the spreadsheet then:
//    File > Publish to the Web ...
// Use the URL you get once you've published it.
var spreadsheet_published_url = "https://docs.google.com/spreadsheets/d/1y7Qi4H9ldkfYvnJPNpkfCzxSwQhX4doEm64bgvdSwsw/edit?usp=sharing";

// the name of the sheet in a mult-sheet spreadsheet
var sheet_name = "Sheet1";

// these named columns will be searched for a match
var columns_to_search = ['Tags'];

// number of rows to slack back as examples
var num_rows_to_send_back = 1;


exports.handler = function(event, context, callback){ 

    // funtional code goes here ... with the 'event' and 'context' coming from
    // whatever calls the lambda function (like CloudWatch or Alexa function).
    // callback function goes back to the caller.
    
    // our quack bot sends the info in command.predicate
    var query = event.term;

    getSpreadsheetData(spreadsheet_published_url, sheet_name)
    .then((sheet_data) => {
        searchSheet(query, sheet_data, columns_to_search)
        .then((answer) => {
            
            var reply = {};
            reply.file = answer[0][0]["File"];
            reply.date = answer[0][0]["Date"];
            
            callback(null, reply);
        });
    })
    .catch((promise_err) => {
        callback(promise_err);
    });
    

};

function getSpreadsheetData(document_URL, sheet_name) {
    return new Promise((resolve, reject) => {
        
        var options = {
            key: document_URL,
            callback: onLoad, 
            simpleSheet: false
        };
        
        function onLoad(data, tabletop) {
            
            // if (data == "" || data == null || data == undefined) {
            //     reject("Error loading data");
            //     return;
            // }
            
            resolve(tabletop.sheets(sheet_name).all());
            
        }
        
        Tabletop.init(options);
        
    });
}

function searchSheet(search_query, sheet_data, search_columns) {
    return new Promise((resolve, reject) => {
        
        // gonna use batch-extract with multiple fields:
        // https://github.com/nol13/fuzzball.js#batch-extract

        var processor = function(choice) {
            var combination = "";
            search_columns.forEach(function(field){
                combination += choice[field] + " ";
            });
            return combination;
        };

        // set the fuzzy options
        var fuzz_options = {
            scorer: fuzz.partial_ratio,
            processor: processor,
            limit: num_rows_to_send_back,
            cutoff: 50,
            unsorted: false
        };
        
        // // funciton used above for combining several columns
        // // into one thing to search

        
        // perform the fuzzy search
        var results = fuzz.extract(search_query, sheet_data, fuzz_options);
        
        console.log(results);
        resolve(results);
        
    });
}
