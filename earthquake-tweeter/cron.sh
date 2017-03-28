#!/bin/bash

# Tell cron to use my local .profile information
source /home/ubuntu/.profile

# change directories into the bot's directory
cd /home/ubuntu/cuny-prototyping-lab/earthquake-tweeter

# run node with full path 
/home/ubuntu/.nvm/versions/node/v7.7.4/bin/node index.js

#### Also ...

# edit crontab with 
#    crontab -e
# and add this line ...
#    * * * * * /home/ubuntu/cuny-prototyping-lab/earthquake-tweeter/cron.sh >> /home/ubuntu/cuny-prototyping-lab/earthquake-tweeter/cron.log

# also probably need to give cron permission ... BUT DO IT LOCALLY BECAUSE THEY GET SAVED TO GIT:
#    chmod u+x cron.sh
