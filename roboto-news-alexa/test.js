var app = require('./bot.js');

var send_to_app = {
    term: "alexa"
};

app.handler(send_to_app, null, function(error, result){
    console.log(JSON.stringify(result));
});
