## Week 10 - Everybody Workshops

- Crafting Intents & Responses in Dialogflow 
    - Pulling them into Dexter
    - For Cooking project
- Pulling API data into Dexter
    - Cryptocurrency prototype
    - Apply to Spotify search
- Pulling API data into Google Spreadsheets
    - Apply to Analytics Dashboard
- Simple scraping
    - Work on Chinanonfiction.com

## Creating Intents & Responses in Dialogflow


## Pulling API data into Dexter

- Check Dexter Docs: http://docs.rundexter.com/writing/advanced/http-requests/

- Do with Spotify
- Spotify API reference: https://developers.soundcloud.com/docs/api/reference
    - See https://developers.soundcloud.com/docs/api/guide#authentication
    - Authenticate just one account: "Authenticating without the SoundCloud Connect Screen"
- Blocker: Not currently accepting API registrations


## Pulling API data into Google Spreadsheets

- Going to use openweathermap.org
- Great info here: https://www.benlcollins.com/apps-script/beginner-apis/
- Which is also here: https://github.com/benlcollins/apps_script_apis/blob/master/for_website/001_numbers.gs
- We'll add in `JSON.parse(data)`

```
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Custom Numbers API Menu')
      .addItem('Display random number fact','callNumbers')
      .addToUi();
}

function callNumbers() {

    // Call the Numbers API for random math fact
    var response = UrlFetchApp.fetch("http://numbersapi.com/random/math");
    Logger.log(response.getContentText());

    var fact = response.getContentText();
    var sheet = SpreadsheetApp.getActiveSheet();
    // sheet.getRange(1,1).setValue([fact]);
    sheet.getRange(sheet.getLastRow() + 1,1).setValue([fact]);

}
```

## Simple Scraping with Node

- This is our guide: https://github.com/jkeefe/simple-scraping-demo/blob/master/scraper.js


