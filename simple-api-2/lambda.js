var questionbot = require('./index');
var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();

module.exports = api;

api.get('/question-bot', function(request){
  // bulding the reply (repsonse)
  return questionbot(request)
  
    // wait for the Promise object to come back from questionbot
    .then(function(response){
        
      // send the response back to the requester
      return new api.ApiResponse(response, {'Content-Type': 'text/plain'}, 200);
    
    });
});