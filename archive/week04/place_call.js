var accountSid = '~secret code~';
var authToken = "~secret key ~";
var client = require("twilio")(accountSid, authToken);  
var numbers = ["+16465551212", "+19175551212"];

for (i = 0; i < numbers.length; i++ ) {
   placeCall(numbers[i]);
}
 
function placeCall(number){
   client.calls.create({
       url: "http://project.wnyc.org/robocaller/playfile.xml",
       to: number,
       from: "+19177461123",
      method: "GET"
   }, function(err, call) {
       console.log(call.status);
   });
}