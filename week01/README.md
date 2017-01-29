## Week 1 • Monday, January 30, 2017	

**SMS Texting / Introduction / Prototyping**

We'll get to know each other, talk about what we're bringing to the class and play with some texting projects.

_Assignent due next week: List 10 ways you might use SMS in your project, with a descriptive paragraph for each. Put those in a file in the Google Drive folder. Storyboard one of them on paper, and bring it to class._

## Plan

### SMS Texting

* Textfun demo
    * Start Server
    * Call the number
    * How it works
        * Anatomy of a text message
        * Twilio
            * buy a number
        * Flow
            - phone -> twilio -> server -> screen
            
### Class Intro

* Names
* Github
* Syllabus
* Schedule
* Slack Setup

### More SMS
            
* Pets demo
    * text the number
    * walk through process
    * if the text starts with hello and there's no name cookie ...
        * ask for name
        * set name_cookie to "waiting"
    * if the name cookie exists and it's "waiting" ...
        * set name_cookie to the body of the message (ie `John`)
        * ask about dogs
        * set dog_cookie to "waiting"
    *  if the dog cookie exists and it's "waiting" ...
        * set dog_cookie to the body of the message  (ie `yes`)
        * ask about cats
        * set cat_cookie to "waiting"
    * if the cat cookie exists and it's "waiting" ...
        * set cat_cookie to the body of the message (ie `n`)
        * respond differently according to the first letters of the cat & dog cookies
            * y & y
            * y & n
            * n & y
            * n & n
            
* Other SMS examples
    * Survey tool
        - 5 questions in spanish or english
        - dropped into a google spreadsheet
    * GatherCat
        - Flow
    * SitterBot
        - Flow
    * Sensors -> Data
        - Flow
    * Weather texting
        - Using API
        - Show hiWeatherbot

* Consider how you might use sms in your projects
    * Can get some of your assignment done now!
    * Let's architect some of them
    

## I like, I wish, I wonder


## Post-class Instructor Notes

