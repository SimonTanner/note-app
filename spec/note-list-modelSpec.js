(function() {
  console.log('note-list-model');
  testOne();
})();

function testFail(error) {
  console.log('Test failed');
  console.log(error);
}

function testPassed() {
  console.log('Test passed');
}

function testOne() {
  console.log("Test 1: Can create a new instance of NoteList");
  try {
    var noteList = new NoteList();
    testPassed();
  } catch(err) {
    testFail(err);
  }
}
