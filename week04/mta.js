var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '3094d6a7486b4d7ec814631f21ee1b6d', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

mta.schedule(201).then(function (result) {
    var display = JSON.stringify(result);
  console.log(display); 
});

