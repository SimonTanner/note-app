(function() {
  console.log("Note-List-View");
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
  console.log('Test 1: Can create an instance of NoteListView');
  try {
    var noteListView = new NoteListView();
    if (noteListView.constructor != NoteListView) {
      throw(err);
    }
    testPassed();
  } catch(err) {
    testFail(err);
  }
}
