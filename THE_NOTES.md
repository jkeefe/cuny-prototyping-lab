[The Syllabus](./README.html) | [The Fine Print](./THE_FINE_PRINT.html) | [The Notes](./THE_NOTES.html)

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
- Hot duck


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


```
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('API')
      .addItem('Update Bitcoin','callCoinbase')
      .addToUi();
}

function callCoinbase() {

    // Call coinbase for the latest data
    var response = UrlFetchApp.fetch("https://api.coinbase.com/v2/prices/spot?currency=USD");
    Logger.log(response.getContentText());

    var coinbase = JSON.parse(response.getContentText());
    var sheet = SpreadsheetApp.getActiveSheet();
    // sheet.getRange(1,1).setValue([coinbase.data.amount]);
    // sheet.getRange(1,2).setValue([coinbase.data.currency]);
    sheet.getRange(sheet.getLastRow() + 1,1).setValue([coinbase.data.amount]);

}
```


### Extra info

- Many more great examples here: https://www.benlcollins.com/spreadsheets/starting-gas/


## Roll your own information service

When your project needs to blend existing information, or relies on custom data only you have, you may need to get into some code. We'll use Glitch to play with some examples (no coding experience necessary.)

- Intro to Glitch
- Make a state motto api

# Conversational Interfaces

## Storytelling with chatbots

Texting or chatting with bots is one way to communicate with your audience. We'll learn the dos and don'ts of automated conversations -- and then we'll make one.

- Eyeo preso

### Build a chatbot

- Grab workshop preso

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

### Simple Question and Answer

Come up with three questions a human might ask your bot, once that human knows what your bot is about.

- Make all the human questions (the triggers, or `+` lines ) **lowercase**
- In the human questions (triggers,  or `+` lines) **don't use punctuation**
- Put a blank line between each set. See below.
- Test your questions in the demo phone as you go.

```
+ where is star island
- It's 10 miles off the coast of Portsmouth, New Hampshire, on the east coast of the United States.

+ how do you get there
- There are many boats that make regular trips from Portsmouth, New Hampshire.

+ whats on star island
- There's a big, old hotel. Also a marine lab, some tennis courts, an old stone chapel and a historical museum. Also lots of seagulls!
```

- Try it! Now we can test our bot in the "phone" that's on the side of the screen. Try typing your questions. They must be exact.

### A little help

Using a `*` means "anything" and [brackets] means it's optional. So here's a smart way to catch anyone saying the word "help" (with anything or nothing before or after "help"):

```
+ [*] help [*]
- Just type a question, and I'll give it my best shot.
```

Also, we probably want to say something nice when there is no match. You can use the "catchall" to match anything that hasn't already matched. 

```
+ *
- I'm sorry, I don't understand what you said.
```

Another nice trick is to add multiple `-` lines. Dexter will randomly pick from among them to reply.

```
+ *
- I'm sorry, I don't understand what you said.
- If that's a question, I don't know the answer yet.
- Ooof. I don't understand. Maybe try asking in another way.
```

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
- There's a big, old hotel. Also a marine lab, some tennis courts,
an old stone chapel and a historical museum. Also lots of seagulls!
```

- There is a single carriage return at the end of a `+` command and at the end of a `-` command.

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

### Adding fun features

You can -- and should -- guide your user's path by providing buttons, which show up really nicely in Facebook. Here's how:

- Tip! You can insert buttons, links, images, and more using the "+Insert" button at the top of the editing window.

Add buttons ...

```
+ hi
- I'm a bot that can answer your questions about Star Island. What 
would you like to know about? ^buttons(Location, Getting There, What's on Star)
```

Revise the triggers to match the buttons. Clicking a button is as if the user has _typed_ the words in that button. (Remember: No punctuation in your triggers!)

```
+ whats on star
- There's a big, old hotel. Also a marine lab, some tennis courts, an old stone chapel and a historical museum. Also lots of seagulls!
```

You can also add a link!

```
+ location
- It's 10 miles off the coast of Portsmouth, New Hampshire. ^link("https://goo.gl/maps/T5qxWXTXLLF2","Star Island Map")
```

Add a picture ...

```
+ getting there
- There are many boats that make regular trips from Portsmouth, New Hampshire. ... like the Thomas Laighton ^image("http://media.johnkeefe.net/class-modules/boat.jpg")
```

These "shortcuts" -- what Dexter calls the commands that start with a carrot `^` aren't something you have to memorize. They're also available in the bar above your bot script by clicking "+ Insert."

You can also use buttons to provide better help ...

```
+ [*] help [*]
- Here are the things I know how to do. Just pick one! ^buttons(Location, Getting There, What's on Star)
```

### Routing

Here's a new RiveScript feature for you: Routing the user to another trigger.

Our bot really only answers three questions. So it might make sense to provide buttons to those three things after every question.

One way to do that would be to provide the button code -- `^buttons(Location, Getting There, What's on Star)` -- after every answer, like so:

```
+ location
- It's 10 miles off the coast of Portsmouth, New Hampshire. ^link("https://goo.gl/maps/T5qxWXTXLLF2","Star Island Map") ^buttons(Location, Getting There, What's on Star)
```

That would certainly work. But there's a more efficient way. Let's make _one_ button trigger:

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

## Prototyping voice conversations
 
Building a whole Alexa skill just to test it out on your friends or possible customers is possible -- but not always necessary. We'll learn how to prototype voice conversations quickly using an audio playboard.

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
