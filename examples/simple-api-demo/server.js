const express = require('express');

// load in the state data from the capitals.json file
const state_data = require('./capitals.json');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (request, response) => {

  response.setHeader('Content-Type', 'application/json');
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const random_capital_number = Math.floor(Math.random()*state_data.length) ; 
  const one_capital = state_data[random_capital_number];

  response.send(one_capital);

});

app.get('/state/:id', (request, response) => {

  response.setHeader('Content-Type', 'application/json');
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  // loop through all the states to see if we get an id
  state_data.forEach( (state) => {
  
    // does the lower-case abbreviation of the state we're looking at
    // match the lower-case version of the state in the URL? 
    if (state.abr.toLowerCase() == request.params.id.toLowerCase() ) {
      
      // Found a match!
      // Send the state data baak to the user
      response.send(state);
      
    }
  
  });
  
  // if we got here, we didn't find a match,
  // so let the user know
  response.send('{"error": "no state found"}');
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});