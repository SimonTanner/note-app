(function() {
  console.log("Note-List-View");
  testOne();
  testTwo();
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

function testTwo() {
  console.log('Test 2: Can take a note-list-model upon instantiation');
  try {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    if (noteListView.lists[0] != noteList) {
      throw(err);
    }
    testPassed();
  } catch(err) {
    testFail(err);
  }
}
