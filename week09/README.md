## Week 9 • Monday, April 3, 2017

**Everyone Workshops Project 1 & 2**

As a class, we'll workshop, code, build and explore two classmates' projects.

_Assignent due next week: Your progress notes to date. Include steps you've taken, tests, feedback, and next steps._


# Your own computer in the cloud

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
- Pick the "Basic" plan
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

Copy the code to your server!

`git clone https://github.com/jkeefe/cuny-prototyping-lab.git`

And let's install those helper libraries we needed:

`cd cuny-prototyping-lab`
`cd earthquake-tweeter`
`npm install`

Now try the script.

    `node index.js`

Did it work?
    			


##Make it happen every day, every minute

We're going to create a "cron job." That's a little command to run something at a particular time, or at particular intervals. It's a little cryptic, but what we want to add here is a command to execute 'node getweather.js' every day at 7 a.m.

To do this, we edit the cron file from the command line:

    `crontab -e`

Pick "nano" as your text editor.

There's info in the file there about how it works. We're going to add in the following line at the end of the file:

```bash
* * * * * /home/ubuntu/cuny-prototyping-lab/earthquake-tweeter/cron.sh >> /home/ubuntu/cuny-prototyping-lab/earthquake-tweeter/cron.log
```
Make sure you end that line with a carriage return, or it won't execute! (I have often made this mistake.)

Also probably best to give cron permission to run without you!

`chmod u+x cron.sh`

Note that we use the _full_ path for the files.`

Now you're set.

  
## I like, I wish, What if?

## Post-class Notes
