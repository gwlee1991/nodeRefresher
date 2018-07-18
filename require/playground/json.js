// var obj = {
//   name: "Andrew"
// };

// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log(typeof stringObj);

// var personString = '{"name": "Andrew", "age": 27}';
// var person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);
console.log(note.title);
console.log(typeof note);