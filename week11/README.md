# Week 11 - Everybody Workshops

## Alexa Smarts

Base Dexter code we'll need:

```
+ launchrequest
- This is the start of things. Maybe an opening word. {@ getinfo}

+ getinfo
- This is where we'll get the info. {@ farewell}

+ farewell
- Optional farewell text. Not optional closing command. ^alexaEndSession(true)
```

### Wiring up the Alexa Side

Follow the instructions [here](https://github.com/jkeefe/workshops/tree/master/module-alexa-fact-skill#wiring-up-alexa).

### Dialogflow code for Dexter

Here's the base code you need. Put your Dialogflow agent's `Client access token` in place of the `xxxxxxxxx`:

```
+ *
$ GET https://api.api.ai/v1/query?v=20150910&query=<call>encode_uri <star></call>&lang=en&sessionId=<get _platformId> {"headers":{"Content-Type":"application/json", "Authorization": "Bearer xxxxxxxxx"}}
* ${{result.fulfillment.speech}} != "" => ${{result.fulfillment.speech}} 
- Sorry, I didn't get that.
- Hmmm. You may have to rephrase that.
- I don't have an answer for that.

> object encode_uri javascript
    return encodeURIComponent(args[0])
< object
```

### Let's do the same for Coinbase

Remember our Coinbase API call from last week:

```
+ bitcoin price
$ GET https://api.coinbase.com/v2/prices/spot?currency=USD
- Current bitcoin price is: ${{data.amount}} ${{data.currency}}
```

## Google Dashboards

- Going to use openweathermap.org
- NYC info is: http://api.openweathermap.org/data/2.5/weather?lat=41&lon=-74&units=imperial&appid=YOUR_API_KEY_HERE
- Great dashboard info here: https://www.benlcollins.com/apps-script/beginner-apis/
- Which is also here: https://github.com/benlcollins/apps_script_apis/blob/master/for_website/001_numbers.gs
- We'll add in `JSON.parse(data)`

```
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Open Weather API Menu')
      .addItem('Update Weather','callWeather')
      .addToUi();
}

function callWeather() {

    // Call the Numbers API for random math fact
    var response = UrlFetchApp.fetch("http://api.openweathermap.org/data/2.5/weather?lat=41&lon=-74&units=imperial&appid=YOUR_API_KEY_HERE");
    Logger.log(response.getContentText());

    var data = response.getContentText();
    var sheet = SpreadsheetApp.getActiveSheet();
    // sheet.getRange(1,1).setValue([fact]);
    sheet.getRange(sheet.getLastRow() + 1,1).setValue([fact]);

}
```

### Extra info

- Many more great examples here: https://www.benlcollins.com/spreadsheets/starting-gas/
- openweathermap Icons can be retrieved like this: http://openweathermap.org/img/w/10d.png
- see https://openweathermap.org/weather-conditions for more on icons
- 

