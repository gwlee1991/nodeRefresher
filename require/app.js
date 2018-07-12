console.log('running app.js');
const fs = require('fs');
const os = require('os');
const notes = require('./note');

var user = os.userInfo();
// console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
  if (err) {
    console.log(err);
  }
});

var result = notes.addNote();
