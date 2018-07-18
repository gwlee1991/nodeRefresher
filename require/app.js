console.log('running app.js');
const fs = require('fs');
// const os = require('os');
const notes = require('./note');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];
// console.log("Command: " + command);
// console.log('process', process.argv);
// console.log('yargs:', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  const title = argv.title;
  notes.getNote(title);
} else if (command === 'remove') {
  const title = argv.title;
  notes.removeNote(title);
} else {
  console.log('command not recognized');
}

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//   if (err) {
//     console.log(err);
//   }
// });

// var result = notes.addNote();

// console.log(_.isString('hi'));
// console.log(_.isString(3));