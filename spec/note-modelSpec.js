// const Note = require("note-model");

(function() {
  testOne();
})();

function testOne() {
  var note = new Note();
  if(note === 'undefined') {
    return "Test failed";
  }
};
