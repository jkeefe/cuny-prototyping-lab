# Week 2

**Bots & Intellegent Agents**

Alexa, Siri and many other agents are now a part of our world. Let's play with some bots, talk about how to make them and think about how they could be used in your projects.

## Plan

### Bot Overview

- Presentation
  - Slide deck
  - Alexa
  
- Software you can talk with
 - Text messages
     - Like Note to Self’s Infomagical project
     - Electionland’s voting-problem reporting project

 - Facebook Messenger
     - CNN
     - Try ABC News Australia https://www.messenger.com/t/abcnews.au
     - Try poncho … say I’m hungry! https://www.messenger.com/t/hiponcho
     - Try https://messenger.com/qzy … say “bread” or "st"
 - Alexa
     - Open cat facts
     - Flash briefing

### Make Some Bots

- IFTTT bot / Twitter
- IFTTT bot / Spreadsheet
- Slack bot

(Break)

### Write some bots

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
   - Note that if you can't see the demo phone, you may need to close the "helper" box that pops up in the lower right corner first.

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
  
## I like, I wish, What if?

## Post-class Notes

