## Week 4 

**The Amazon Cloud**

## Sign up
- Probably CC
- Free tier 

## Whole Collection Of Stuff
- 100 services?
- Data centers all over the world 
- Documented 
- But for engineers

## S3
- solid storage 
- Like making directories on Amazon's servers
- Code can't run there - mainly for images, html, js that runs in browser
- Open to the internet (if you make it)
- buckets (the directory)
- Drag and drop 👈🏻
- Make public
- Lives "across" regions

## EC2
- a full computer in the cloud 
- A huge innovation 
- All sizes and shapes
- Linux, micro, ml huge
- Runs 24/7
- Lives in ONE region
- Connect via terminal 
- Companies rely on them, basically much of the internet (which we know because of a few crashes)
- Instructions available (see below!)
- Good if you are running software 24/7
- Has an address, can make it public
- How I used to run code: function sits and waits to run

## Lambda
- latest move
- "Serverless"
- Code lives in the cloud 
- "Wakes up" runs and goes to sleep
- Awake for no more than 5 mins
- Only pay for the memory used for the time used. 
- No changeable storage!
- Works for 95% of what you'll need (est!)
- Great to make APIs
- Not naturally connected to the public internet

## API gateway
- Routes incoming web/api requests to the proper place (usually Lambda)
- Generates a url for that place

## Cloudwatch
- Where the logs are!
- Also where we make automatic things happen

-- BREAK --

## Permissions
- Hardest to handle 
- Can get help if stuck
- AWS Genius Bar


- Permission for YOUR computer
    - IAM
        - Users (people) 
        - Policies
    - User
    - User Name: superduper
    - Check programatic Access
    - “Attach existing policies directly”
    - Look at Administrator Access
    - Check that
    - Review
- Set up .aws/credentials *
- Set up .aws/config *
- Use pico

- permissions between services:
- Roles
(like a user, usually some code or an AWS service)
- Policies 

## Make an API in Lambda

./node_modules/.bin/claudia create --region us-east-1 --api-module lambda

- Make a new folder
- Open it in your text editor
- make a file called `index.js`
- put this into it:

```javascript
module.exports = function(request) {
  
  return new Promise(function(resolve, reject){

      resolve("OK");

  });
  
};
```

- make another file called `lambda.js`
- put this into it:

```javascript
var questionbot = require('./index');
var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();

module.exports = api;

api.get('/question-bot', function(request){
  // bulding the reply (repsonse)
  // which first sends the request object to sparkbot for processing
  return questionbot(request)
  
    // wait for the Promise object to come back from sparkbot
    .then(function(response){
      // send the response back to the requester (Twilio)
      return new api.ApiResponse(response, {'Content-Type': 'text/plain'}, 200);
    });
});
```

- Open your folder in the terminal: 

```
npm init
npm install claudia --save-dev
npm install claudia-api-builder --save
npm install twilio mongodb --save
```

### Starting Claudia:

`./node_modules/.bin/claudia create --region us-east-1 --api-module lambda`

### Updating Claudia

`./node_modules/.bin/claudia update`


## Other John Notes:

- csv of data
- Json of Data?
- Send the request
- Get the response
- Wire that to Dexter 
- Wire that to Twilio
- Show party bot?
- Not all require api-gateway

- Lambda environment variables
- Setting
- Accessing (process.env.NAME)

- For Twilio, need XML



----


# Your computer in the cloud: Amazon EC2

    - Build a computer in the cloud
    - Tweet from there
    - A hint at lambda

First a quick discussion about EC2 v S3.

**S3** holds static files, such as html and js files. If you use it as a web hosting place, which is common, you just want to make sure all the files are public.

So that poses a problem when you have API keys!

**EC2** is a live computer where you can run programs -- including programs that use your API keys. 

## Fire Up Your Cloud Computer

- go to [http://aws.amazon.com](http://aws.amazon.com)
- Sign up with your Amazon account. You will be asked for your credit card, and spending money is possible here. But today's steps involve spinning up a "micro" server which will run a year for free. You'll want to shut it down to avoid being charged in a year!
- Go to the AWS Management Console
- If you don't see "N. Virginia" next to your name at the top, change it to that
- Pick EC2
- Launch an instance!
- Pick Ubuntu
- pick the t2.micro (it's free for a year!)
- Leave all of the configuration details as is, click Next ...
- Leave the storage details as is, click Next ...
- Opposite the "name" box, put in a name for your computer. Like `My First Cloud Computer`, click next ...
- Despite the warning, leave security group things as is (This is not the best practice, but more on that in class)
- Click `Review and Launch`
- Click `Launch`
- Change the next menu to "Create a New Key Pair"
- You'll get a file downloaded. Put that on your desktop. You'll need it in a bit.

Great! Before you continue, we have to fix something on that key you just downloaded to give it the right permissions.

Open your Terminal program. Type:

    `chmod 400 [path to pem file]`

Need to grab the key and put it in our hand

    `ssh-add [path to pem file]`
    
##Log into your new computer and set things up!

Now we can log in. You get the IP address by clicking on the EC2 instance in your Amazon console at aws.amazon.com and looking at the "Public IP":

    `ssh ubuntu@<public IP>`
	( like ssh ubuntu@12.34.56.78 )
        
You in? If so, there are some things we need to install, including "node" and the node package manager, "npm"

```
    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node
```

And let's install those helper libraries we needed:

`npm init --yes`
`npm install request node-twitter-api --save`


Upload our file using `scp` (secure copy).

    `scp getweather.js ubuntu@XX.XX.XX.XX`

Now try the script.

    `node getweather.js`

Did it work?
    			


##Make it happen every day at 7 a.m.

We're going to create a "cron job." That's a little command to run something at a particular time, or at particular intervals. It's a little cryptic, but what we want to add here is a command to execute 'node getweather.js' every day at 7 a.m.

To do this, we edit the cron file from the command line:

    crontab -e

Pick "nano" as your text editor.

There's info in the file there about how it works. We're going to add in the following line at the end of the file:

	0 7 * * * node /home/ubuntu/getweather.js

Make sure you end that line with a carriage return, or it won't execute! (I have often made this mistake.)

Note that we use the _full_ path for the getweather.js file, which is: `/home/ubuntu/getweather.js`

Now you're set. Check it tomorrow at 7 a.m.

  
## I like, I wish, What if?

## Post-class Notes

