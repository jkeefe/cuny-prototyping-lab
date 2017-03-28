var request = require('request');
var moment = require('moment');
var fs = require('fs');
var Twit = require('twit');
var keys = require('../../keys/bigsandboxkeys');
var last_quake = require('./last_quake.json');

var bot = new Twit({
    consumer_key:         keys.TWITTER_CONSUMER_KEY,
	consumer_secret:      keys.TWITTER_CONSUMER_SECRET,
	access_token:         keys.TWITTER_ACCESS_TOKEN,
	access_token_secret:  keys.TWITTER_ACCESS_TOKEN_SECRET
});

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";

request(url, function (error, response, body) {
  
  data = JSON.parse(body);
  
  console.log(data.features[0].properties.mag);
  
  var quake = data.features[0];
    
  if (quake.properties.time > last_quake.time) {
      
      console.log("lon:", quake.geometry.coordinates[0]);
      console.log("lat:", quake.geometry.coordinates[1]);
      console.log("depth:", quake.geometry.coordinates[2]);
      console.log("magnitude", quake.properties.mag);
      console.log("place", quake.properties.place); 
      
      var quaketime = moment(quake.properties.time).format('MMMM Do YYYY [at] h:mm a [ET]');
      console.log("time", quaketime );
      
      quake.properties.mapurl = "https://maps.googleapis.com/maps/api/staticmap?center=" + quake.geometry.coordinates[1] + "," + quake.geometry.coordinates[0] +  "&zoom=5&size=600x500&maptype=roadmap&markers=color:red%7C" + quake.geometry.coordinates[1] + "," + quake.geometry.coordinates[0];
      
      console.log("map: ", quake.properties.mapurl);
      
      
      request.get({url: quake.properties.mapurl, encoding: 'binary'}, function (err, response, body) {
        fs.writeFile("latest_quake.png", body, 'binary', function(err) {
          if(err)
            console.log(err);
          else
            console.log("The file was saved!");
            
            //
            // post a tweet with media
            //
            var b64content = fs.readFileSync('latest_quake.png', { encoding: 'base64' });

            // first we must post the media to Twitter
            bot.post('media/upload', { media_data: b64content }, function (err, data, response) {
              // now we can assign alt text to the media, for use by screen readers and
              // other text-based presentations and interpreters
              var mediaIdStr = data.media_id_string;
              
              var altText = "QUAKE! Magnitude " + quake.properties.mag + ", " + quake.properties.place + " on " + quaketime +".";
              
              var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } };

              bot.post('media/metadata/create', meta_params, function (err, data, response) {
                if (!err) {
                  // now we can reference the media and post a tweet (media will attach to the tweet)
                  var params = { status: altText, media_ids: [mediaIdStr] };

                  bot.post('statuses/update', params, function (err, data, response) {
                    console.log("Tweeted!");
                    
                  var savethis = { "time" : quake.properties.time };
                  
                  fs.writeFile("./last_quake.json", JSON.stringify(savethis), function(err){
                      if (!err) {
                          console.log("quake time updated");
                      }
                  });
                    
                });
                }
            });
        });
                    
            
            
            
        }); 
      });      
      
  } else {
      
     //  console.log("no new quake");

  }
  
});