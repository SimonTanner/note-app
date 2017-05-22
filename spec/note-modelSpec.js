// const Note = require("note-model");

(function() {
  testOne();
  testTwo();
})();

function testOne() {
  console.log('Test 1: Note() creates a new instance of a note');
  try {
    var note = new Note();
    console.log("Test passed");
  } catch(err) {
    console.log("Test failed");
  }
}

function testTwo() {
  console.log('Test 2: Note() takes a note as an argument');
  var note = new Note('Hello world!');
  try {
    if (note.text === undefined) {
      throw(err);
    } else {
      console.log('Test passed');
    }
  } catch(err) {
    console.log("Test failed 'note.text' is undefined");
  }
}
// note = new Note();
//
//
// if (note.text === 'undefined') {
//   throw('err');
// } else {
//   console.log('Test passed');
// }
