# Backend-Assignmant
Rest Api for croning a Todolist tasks with nodejs
# Install
    npm install
# Run
    npm start
# Deployment
   Deployed at Heroku
   
   url: [https://tranquil-lake-34891.herokuapp.com/]
# Route
### GET:  /add
##### Request Data Format
        {name: String, description: String, creator: String, duration: Number}
### POST: /list
##### Response data Format
        {name: String, description: String, creator: String, duration: Number, createdAt: Date}
# Description
### Day 1 (07/09/2020)
      Configure an express project and all the necessary modules like mongoose, cors, node-cron. 
      created a mongodb Atlas cluster and configure it to the express project using mongoose module.
### Day 2 (08/09/2020)
      Added route to the project for adding a todoTask and fetching it from database.
      schedule a cron task of deleting a task based upon the duration provided by user.
### Day 3 (09/09/2020)
      Added local git project to github
      Deploy the the project to heroku
