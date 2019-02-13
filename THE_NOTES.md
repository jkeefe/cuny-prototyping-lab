[The Syllabus](./README.md) | [The Fine Print](./THE_FINE_PRINT.html) | [The Notes](./THE_NOTES.html)

# The Notes

Here's where you'll find resources and class notes for every section.

# Getting Started

## Introductions

- A bit about me
    - [Personal website](https://johnkeefe.net)
    - [Work website](https://qz.com)
    - [Quartz Bot Studio](https://bots.qz.com)
    - [Quartz AI Studio](https://qz.com/1464390/)
    - Twitter: [@jkeefe](https://twitter.com/jkeefe)
    - Email: john.keefe (at) journalism.cuny.edu
    - Slack is better! [Here's our Slack](https://cunylab.slack.com).
    
## Products in Journalism

- Products in Journalism preso

- A bit about you
    - Name
    - Where you're from
    - What's your product?

## What's a Prototype (for us)?

- Something you can try
- (Also something you MAKE, which is fun)
- Maybe just *one*
- Not polished
- Not at scale
- Probably not secure
- But TRY-worthy
- Something you can share

### Quick Examples

- SMS bot: `(646) 699-3322`
- Better Weather
- Hot duck: [hotduck.today](http://hotduck.today/)


## Logistics & plan

- Go through the [Syllabus](./README.md).
- The class description, logistics, rules, and grading details are in a document I call "[the fine print](./THE_FINE_PRINT.md)."
- Grading options
- Everyone in the Slack! [Join here](https://join.slack.com/t/cunylab/signup) and use your school email address.

# Playing with APIs

## Make bots to do your bidding

IFTTT - "If this then that" - https://ifttt.com

- Every time Donald Trump tweets, put it in a spreadsheet
- Every time it's at or below 32 degrees send a tweet
- Whenever someone posts on their blog, get an email
- Whenever papers are filed in a court case, get an email 
- Make Alexa tweet for you
- When something happens in the digital world, make something happen in the physical world

## Valuable data is everywhere. Let's get it.

Weather info, crypto prices, earthquake alerts -- it's all available, and ready to be shaped into a new product nobody's made before you did.

- [ProPublica Congressional API](https://projects.propublica.org/api-docs/congress-api/)
- [Dark Sky](http://darksky.net)
- [MTA subway info](http://datamine.mta.info/list-of-feeds)
- [Coindesk Bitcoin API](https://www.coindesk.com/api)

### Dig into some APIs

- Coindesk
    - Deets.
    - API call: [`https://api.coindesk.com/v1/bpi/currentprice.json`](https://api.coindesk.com/v1/bpi/currentprice.json)
    - looks like a mess!
        - Extensions
        - Jsonview
    - Quick discussion of JSON format
        ```json
        
        
        {
            "day": "Wednesday, January 30, 2019",
            "currently": { "description":"SNOW" },
            "forecast": {
                    "condition": "COLD",
                    "temperature": 5,
                    "exclamations": ["Wow!","Brrr!","Careful!"]
                }
        }
        
        
        ```

- Dark Sky API
    - http://darksky.net/dev
    - sign up for an account
    - see your key
    - try your key: [`https://api.darksky.net/forecast/YOUR_KEY_HERE/40.755,-73.991`](https://api.darksky.net/forecast/YOUR_KEY_HERE/40.755,-73.991)
    - toy with the lat/lon
    - Propublica's congressional api
        - https://www.propublica.org/datastore/api/propublica-congress-api
    
- Twilio API
    - Simple script place_call.js (run from my laptop ~/Documents/testing)

## Making quick and dirty dashboards

From web site analytics to stock prices, making dashboards to track your numbers may be the most important product you build, even if just for yourself. We'll use APIs and spreadsheets to make 'em fast.

### Google Spreadsheet Dashboards

- Going to use coinbase.com
- NYC info is: http://api.coinbase.com
- Great dashboard info here: https://www.benlcollins.com/apps-script/beginner-apis/
- Which is also here: https://github.com/benlcollins/apps_script_apis/blob/master/for_website/001_numbers.gs
- We'll add in `JSON.parse(data)` to those examples

Steps:

- Open a new Google spreadsheet
- Name it
- Go to tools -> Script Editor
- Name it
- Copy and paste this block of code into the main window:


```
function onOpen() {

    // this code runs when the spreadsheet is opened
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('API')
      .addItem('Update Bitcoin','callCoinbase')
      .addToUi();
      
}

function callCoinbase() {

    // Call coinbase for the latest data
    var response = UrlFetchApp.fetch("https://api.coinbase.com/v2/prices/spot?currency=USD");

    var coinbase = JSON.parse(response.getContentText());
    var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1,1).setValue([coinbase.data.amount]);
  
}
```

- Let's review the code
- Reload the page (to trigger the "onOpen" function
- First time it runs, will ask you for permission to use the script. 
- Try the button!

More code snippets:

Add the currency value ...

```
sheet.getRange(1,2).setValue([coinbase.data.currency]);
```

Make it append to the end of the list ... (calculate the "row" as the last row plus 1) ...

```
sheet.getRange(sheet.getLastRow() + 1,1).setValue([coinbase.data.amount]);
```


### Extra info

- Many more great examples here: https://www.benlcollins.com/spreadsheets/starting-gas/


## Roll your own information service

When your project needs to blend existing information, or relies on custom data only you have, you may need to get into some code. We'll use Glitch to play with some examples (no coding experience necessary.)

- Intro to Glitch
    - [Here's my API demo project](https://glitch.com/edit/#!/simple-api-demo?path=README.md:1:0)
    - Show it working
- Data prep
    - The [list of capital data]( https://simple.m.wikipedia.org/wiki/List_of_U.S._state_capitals) I got from Wikipedia.
    - Copy-pasted the table into a text file
    - Search-replaced the commas with blanks to take them out, because they mess things up :-)
    - Saved as a `.tsv` file (tab-separated values). See it [here](https://glitch.com/edit/#!/simple-api-demo?path=capitals.tsv:52:0).
    - use [Mr. Data Converter](https://shancarter.github.io/mr-data-converter/) to convert the `.tsv` data into `JSON - Properties`
    - Copied that into a new file I called [`capitals.json`](https://glitch.com/edit/#!/simple-api-demo?path=capitals.json:50:194)
- Add the state-lookup data part ([available here](https://github.com/jkeefe/cuny-prototyping-lab/blob/master/examples/simple-api-demo/server.js))
- You can remix this!

# Conversational Interfaces

## Build a chatbot

- Walk through [this workshop preso](http://media.johnkeefe.net/chatbot-workshop)

- Intro to Dexter
   - Go to [rundexter.com](http://rundexter.com)
   - Make an account
   - Click "Make your first bot" button (or something similar)
   - Enter your email
   - Pick a password
   - Click "Signup"
   - Click the blue "+ New Bot" button.
   - Name it as you wish (but don't use quotes or apostrophes)
   - For template, Click "Blank Project"
   - Click "Create Bot"
   - Clear out what appeaers (we'll start from scratch for real)

   - `+` is what the human says ... the trigger
   - `-` is what the bot says ... the response
   - Note there's a space after the `+` or `-`

   Let's start out with a good introductory phrase. Let people know right away what they'll get from this bot.

```
   + hi
   - I'm a bot that can answer your questions about Star Island. Ask 
   me anything!
```

   - Try it in the demo phone!


### Triggers and Bot Responses

- `+` is what the human says ... the trigger
- `-` is what the bot says ... the response
- There's a space after the `+` or `-` and before the text that follows.

```
+ hi
- I'm a bot that can answer your questions about Star Island. Ask 
me anything!
```
- I always put a blank line before each new `+` trigger, though it's not actually essential.

- All triggers -- the  `+` lines -- must be **lowercase**
- All triggers -- again, the `+` lines -- should **leave out punctuation**
   - There are some exceptions to this, but they're code-related
   - Pay special attention to apostrophes, commas, question marks, and periods -- leave them out

```
+ whats on star island
- There's a big, old hotel. Also a marine lab, some tennis courts, an old stone chapel and a historical museum. Also lots of seagulls!
```

- There is a single carriage return at the end of a `+` command and at the end of a `-` command.

- Try adding some more questions. 

```
+ where is it
- It's 10 miles off the coast of Portsmouth, New Hampshire.

+ how do you get there
- There are many boats that make regular trips from Portsmouth, New Hampshire.
```

### Catchalls

- An asterisk `*` in a trigger means "anything"

```
+ *
- I'm sorry, I don't understand what you said.
- If that's a question, I don't know the answer yet.
- Ooof. I don't understand. Maybe try asking in another way.
```

### Optionals

Brackets -- `[ ]` -- surround optional content in a trigger. We used this in the "help" trigger:

```
+ [*] help [*]
- Just type a question, and I'll give it my best shot.
```

Let's dissect this a moment, just to be clear:

`+ help` ... matches only the human typing "help" and only "help"; "help me" would not match.
`+ * help *` ... would match only "please help me," because there are words before and after "help"; "help me" would not match.
`+ [*] help [*]` ... matches any mention of "help," no matter if there are words before or after it -- because they are optional. So "help me" matches, as does "help" and "can you please help me?"

### Buttons

Our bot really only answers three questions. So it might make sense to provide buttons to those three things after every question.

To add buttons, use the "button" button, which looks like a share icon at the top of your scripot. Position your cursor at the end of the introduction text and click the button button. Then edit the script to look like this: `^buttons(Location, Getting There, What's on Star)`

**Important:** Now we have to go change the triggers for those questions to these titles. That's because clicking a button basically mimics the user _typing_ the content of the button.

So:

```
+ where is it
- It's 10 miles off the coast of Portsmouth, New Hampshire.
```

... becomes ...


```
+ location
- It's 10 miles off the coast of Portsmouth, New Hampshire.
```

As you change the trigger names for your answers, be sure to remember: all lowercase, no punctuation

Try it!

### Routing

You'll quickly note that to keep getting answers you have to say `hi`. It would be nice to have all of the buttons show up after every answer.

To do that, _could_ add buttons after every answer, like so:

```
+ location
- It's 10 miles off the coast of Portsmouth, New Hampshire. ^link("https://goo.gl/maps/T5qxWXTXLLF2","Star Island Map") ^buttons(Location, Getting There, What's on Star)
```

But there's a better way. 

Let's make a new trigger called `my buttons` that contains just the buttons:

```
+ my buttons
+ ^buttons(Location, Getting There, What's on Star)
```

And then _route_ the user to that trigger after every option. We do that with the `{@ trigger}` notation, like so:

```
+ hi
- I'm a bot that can answer your questions about Star Island. What 
would you like to know about? {@ my buttons}

+ location
- It's 10 miles off the coast of Portsmouth, New Hampshire. ^link("https://goo.gl/maps/T5qxWXTXLLF2","Star Island Map") {@ my buttons}

+ getting there
- There are many boats that make regular trips from Portsmouth, New Hampshire. ... like the Thomas Laighton ^image("http://media.johnkeefe.net/class-modules/boat.jpg") {@ my buttons}

+ whats on star
- There's a big, old hotel. Also a marine lab, some tennis courts, an old stone chapel and a historical museum. Also lots of seagulls! {@ my buttons}

+ [*] help [*]
- Here are the things I know how to do. Just pick one! {@ my buttons}
```

This may seem silly, but it solves two things: You don't repeat yourself (which coders call _DRY_ code) as much, and if you happened to add a fourth or fifth option, you'd just change one line instead of several.

### Adding fun features

Add a picture ...

```
+ how do you get there
- There are many boats that make regular trips from Portsmouth, New Hampshire. ... like the Thomas Laighton ^image("http://media.johnkeefe.net/class-modules/boat.jpg")
```

You can also add a link!

```
+ where is it
- It's 10 miles off the coast of Portsmouth, New Hampshire. ^link("https://goo.gl/maps/T5qxWXTXLLF2","Star Island Map")
```

These "shortcuts" -- what Dexter calls the commands that start with a carrot `^` aren't something you have to memorize. They're also available in the bar above your bot script by clicking the little gray pictures just above your script.

You can also use add buttons to "help" to make that better ...

```
+ [*] help [*]
- Here are the things I know how to do. Just pick one! ^buttons(Location, Getting There, What's on Star)
```

### Order matters

When someone types something to your bot, RiveScript will go through your bot script top to bottom until it hits a match.

```
+ hi there
- Hi friend!

+ hi there
- This response would never be seen.
```

This is also why we put "catchall" functions at the end.

### "Pick one" from a response list

- If you have multiple `-` lines after a `+` trigger, RiveScript will pick one of the `-` lines at random.

```
+ tell me a cat fact
- Cats have four legs.
- Cats belong to the Felidae family.
- Dogs have owners, cats have servants.
```

### Publish your bot

To get this ready to share, click the green "Publish Topic" button.

Dexter is great about walking you through this entire process, under the "Platforms" button. 

- To start, click on the "Platforms" button.
- Choose Website.
- Click the large block of code in the middle of the screen. It'll get copied to the clipboard.

![Click on web block](../module-build-a-chatbot/images/web_code.png)

We're going to put this code onto the web using a paste service. 

- Go to [pste.eu](http://pste.eu).
- Click into the big box.
- Paste the code into the box.
- Hit "Submit"
- You'll get private link. Click it!
- It looks like you now have a blank screen, but click the icon in the lower-right corner.
- Your chat bot will appear!
- Try it!


### Share it with others

You can allow other people to try your bot by giving them your _pste.eu_ link. 

(Also you may want to bookmark it at this point.)

## Alexa, what's a digital assistant?

Voice interfaces are popping up everywhere, and it's possible they will be key to information acquisition in the months and years to come. We'll use Dexter to build an Alexa Skill.

### Examples

- Cat facts
- Weather
- Do I need an umbrella
- Better weather
- Flash briefing audio
- Flash briefing bot voice 

### The making of

- Alexa's architecture
- Anatomy of an Alexa skill
- Better weather

### Make one with Dexter

- Start a new bot in Dexter
- Make the first trigger `+ launchrequest` and provide a friendly introduction. This will be the entry point for your bot script.
- Make the second trigger `+ factlist` and provide a list of facts. Remember, if there are multiple responses beginning with `-`, one will be picked at random.
- Here's an example you can just copy-and-paste into your Dexter bot script:

```
+ launchrequest
- Here's your Star Island fact: {@ factlist}

+ factlist
- Star Island is 10 miles off the coast of Portsmouth, New Hampshire.
- The hotel on the island is called "The Oceanic."
- There is no natural fresh water reserves on the island. Fresh water is collected from arriving boats, rainwater and a seawater desalination system.
- The pirate Blackbeard visited once and is said to have left both treasure and his wife on the neighboring island.
```

We also need a "farewell" section to close out our Alexa session, using the shortcut: `^alexaEndSession(true)`

```
+ farewell
- You will come back. You will come back. Have a great day. ^alexaEndSession(true)
```

Finally, we need to direct every response to the farewell trigger with `{@ farewell}` at the end of every line. (If you don't, Alexa will "hang" and leave the blue ring alive. Say "Alexa, quit" to escape).

So:

```
+ factlist
- Star Island is 10 miles off the coast of Portsmouth, New Hampshire. {@ farewell}
- The hotel on the island is called "The Oceanic." {@ farewell}
- There is no natural fresh water reserves on the island. Fresh water is collected from arriving boats, rainwater and a seawater desalination system. {@ farewell}
- The pirate Blackbeard visited once and is said to have left both treasure and his wife on the neighboring island. {@ farewell}
```

- You can also check out my [full example script](https://github.com/jkeefe/workshops/blob/master/module-alexa-fact-skill/alexa-example.rs).
- Click the "Publish Topic" button to make sure your edits stick!

### Wiring up Alexa

- Chose "Platforms" from the menu at the top of the screen
- Chose "Alexa"
- In the instructions, follow the link to the "Amazon Developer Console."
- If you're not yet an Amazon developer, click the button to create your Amazon Developer Account
    - Provide the information requested
    - NOTE! If you have an Amazon Alexa device already, it's a lot easier down the road if you use the Amazon account (and email address) associated with that device.
- Log into your Amazon Developer Account
- Choose "Alexa Skills Kit"
- Click "Add a new skill"
- Skill type is "Custom Interaction Model" (the default)
- Give your app a name: This will be the one users see in their Alexa app.
- Give your app an invocation: This is the phrase people use to "open" or start your app.
    - I'm using "Star Island Facts" for both of them
- Leave the other settings as they are.
- Click SAVE
- You now have an Application ID. It probably starts with `amzn...`
- Copy your Application ID.
- Paste it into Dexter (make sure there are no trailing or leading spaces)
- Click NEXT
- Go back to your Amazon tab
- Click NEXT to get to the "Interaction Model" page
- Go back to Dexter
- Turn on the "Catch-All mode" which is in Beta
- Click Next

Follow the Dexter instructions to fill out the next fields:
- Intent Schema: Use the Dexter code
- Custom Slot types ...
    - Enter Type: `catchall`
    - Enter Values: copy and paste the list of apparently random words from Dexter
        - Click ADD
    - Sample Utterances: `CatchAllIntent {CatchAll}`
- Click Save
    
You'll need to wait for a little bit for the model to be created.

- Click Next

On the configuration page:

- Pick "HTTPS"
- Go back to dexter and get the "Webhook URL" and pasted it into the Alexa "Default" box
- Click Next
    
On the SSL Certificate page, pick:

- `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`
- Click SAVE then NEXT
    
On the Test page, make sure the skill is "Enabled"

Go back to Dexter, and click NEXT until you get to the "Deploy" button. Click "Deploy."

(You'll want to be sure you bot topic is published, too. Go back to the "Edit" and "Publish Topic" if you have to.)

- Test it out!

### Don't have an Alexa device handy?

On the Alexa "Test page" you can "Enter Utterance" to test how Alexa will respond.

You can see how Alexa will respond in the "Service Response" section, or you can _hear_ the response by clicking on the "Listen" button below the "Service Response" window.

### If you have an Alexa device matching your developer account

If you Alexa Developer Account matches the account with which you registered your Alexa device, just say the invocation phrase! In my example, it would be "Alexa, open Star Island facts."

Note that if the blue ring gets stuck "on," it probably means you forgot to use `^alexaEndSession(true)` as the last thing in your script.

### To invite others to try (or invite another Alexa device not tied to your dev account)

To beta test on an actual Alexa device:

- Must have **all** of the green checkmarks checked. 
- That includes a 108x108 and a 512x512 px logo.
- Invite beta testers 
- If the Amazon account you're using for development is not the one you use for your Alexa device, then you need to invite yourself at the address you use for the device, too.
- Beta testers visit http://alexa.amazon.com ... and should eventually get a pop-up inviting them to participate
- Then the skill gets added.

## Dexter Docs

[More information here](http://docs.rundexter.com/writing/advanced/alexa/)!

## Prototyping voice conversations
 
Building a whole Alexa skill just to test it out on your friends or possible customers is possible -- but not always necessary. We'll learn how to prototype voice conversations quickly using an audio playboard.

## Storytelling with chatbots

Texting or chatting with bots is one way to communicate with your audience. We'll learn the dos and don'ts of automated conversations -- and then we'll make one.

- Eyeo preso

# Machine Learning at Play

## Say what? Computers understanding human language

Automatically processing what someone is saying -- either in a chat, to a voice assistant, or in an email -- is increasingly possible thanks to machine learning. We'll play with one of these natural language processing tools (Dialogflow) to get a handle on how to make it work for you.

- Dialogflow in console
- Intents
- Utterances
- Elements / Entities / Slots
- Pre-built intent sets
- Training

- Using in Google Assistant
- Using as an API
- Google spreadsheet?
- Glitch!



## Sometimes a duck is a special duck

Can you teach a computer to recognize the Mandarin duck in Central Park. Yup. Is that useful? Could be! We'll learn how, as we see how image processing and machine learning can work together on your project.

# Good Product Stuff

## Lots of innovation is happening in email. Yes, email.

A good email offering may be the most important product for your project. We'll look at what makes some emails great and also how to use tools to send **useful** emails programmatically. 

## Physical products: Leaving the laptop for the tabletop

Tiny computers can sense the environment or respond to your commands. They can even keep track of things when you're far away. Prototyping these kinds of products is surprisingly cheap and easy. We'll do it in class.

## Data security: Yours, your company's, your customers'

Let's talk about security. We'll get into how you can start practicing better personal security and about how to act responsibly and ethically with the data you get from others.

## Real-world production in the cloud

When it's time for your prototype to become production-worthy, you'll need scale, security, and reliability. And chances are, that means putting it in a "cloud" service like Amazon's AWS -- or the similar offerings from Google, Microsoft, and others. We'll take a tour through AWS so you can better coordinate with your engineers when it's time to go big
