# First Half - Cloud Computing Continued

## Make an API in Lambda

- Make a new folder
- Open it in your text editor
- make a file called `index.js`
- put this into it:

```javascript
module.exports = function(request) {
  
  return new Promise(function(resolve, reject){

      resolve("OK");

  });
  
};
```

- make another file called `lambda.js`
- put this into it:

```javascript
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
```

- Open your folder in the terminal: 

```
npm init --yes
npm install claudia --save-dev
npm install claudia-api-builder --save
```

### Starting Claudia:

`./node_modules/.bin/claudia create --region us-east-1 --api-module lambda`

### Updating Claudia

`./node_modules/.bin/claudia update`


## Other John Notes:

- var mathnumber = request.queryString.math;

- Find the logs
- csv of data
- Json of Data?
- Send the request
- Get the response
- Wire that to Dexter 
- Wire that to Twilio
- Show party bot?
- Not all require api-gateway

- Lambda environment variables
- Setting
- Accessing (process.env.NAME)

- For Twilio, need XML

