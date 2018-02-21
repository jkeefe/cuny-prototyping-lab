# Week 03

**APIs**

I like to call API's "Another Person's Information" -- services out there you can use to build a unique offering of your own. SDKs are "Software Development Kits" that let you tinker with real-world objects like the iPhone and Amazon Echo. We'll get our hands into some code today.

## Plan

### API overview

Use for reference:
    - ProPublica Congressional API
    
Real time info:
    - darksky.net
    - MTA subway info
        - http://datamine.mta.info/list-of-feeds
        - http://datamine.mta.info/user/register
        - https://github.com/aamaliaa/mta-gtfs
    
Us for action:
    - Slack <=
    - Twitter (read/send tweets)

Spotify
Eventbrite


### A Word about text editors

    - Textwrangler
    - Atom
    - TextEdit (in plain-text mode)

### Dig into some APIs

    - Dark Sky API
        - http://darksky.net/dev
        - sign up for an account
        - see your key
        - try your key
        - looks like a mess!
            - extensions
            - Jsonview
        - toy with the lat/lon
    
    - Propublica's congressional api
        - https://www.propublica.org/datastore/api/propublica-congress-api
    
    <!-- - Twilio API
        - John Demo's how easy it is with place_call.js     -->
    
    - Examine the Twitter API
        - Authentication OAuth
        - The wonder of libraries
        - Look at node-twitter-api
        - Install npm
        - install node-twitter-api:
            - `npm install node-twitter-api --save`


### Let's Tweet

    - Log in to twitter
    - Go to http://twitter.com/apps
        
        Create an app, filling out the required boxes. I'm giving this short shrift here, but take some time to look through it. A couple of tips, tho:

        	- You can ignore the callback part
        	- Access level should be both READ and WRITE
        	- You need to click on the link, "manage keys and access tokens"
        	- You're going to need the following long strings of characters
        		* Consumer Key
        		* Consumer Secret
        		* Access Token
        		* Access Token Secret
        	- The last two you may have to generate with a click of a button
        
    - Open terminal
    - type `cd ~`
    - type `cd Documents`
    - type `mkdir prototyping`
    - type `cd prototyping`
    
    - Open your text editor and navigate to this `prototyping` directory
    
    - Open [tweet_this.js](https://github.com/jkeefe/cuny-prototyping-lab/blob/master/week04/tweet_this.js) on Github
    - Look at the "raw" version (click the "Raw") button
    - Copy-paste this into your text editor
    - Replace all the keys with your actual info
    - Replace the "test text"
    - Save
    - We need to install a couple of helper apps, including node-twitter-api:
    
    `npm init --yes`
    `npm install request node-twitter-api --save`
    
    - Then run your program! (Just do it once, tho!)
    
    `node tweet_this.js`

    - Check your twitter account!
    
Now let's make it a bit more sophisticated!

    - Go to https://github.com/jkeefe/cuny-prototyping-lab/blob/master/week04/getweather.js
    - Click "raw"
    - Copy-paste that into your editor
    - Change the keys to your own again, including darksky
    - save as getweather.js
    
    