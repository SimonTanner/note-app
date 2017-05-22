(function() {
  console.log('note-list-model');
  testOne();
  testTwo();
  testThree();
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

function testTwo() {
  console.log("Test 2: It stores an array of notes");
  try {
    var noteList = new NoteList();
    var myText = "My not-so-private note"
    var note = new Note(myText);
    noteList.addNote(note);
    if(noteList.notes[0] != note) {
      throw(err);
    }
    testPassed();
  } catch(err) {
    testFail(err);
  }
}

function testThree() {
  console.log("Test 3: NoteList().showNotes returns all notes");
  try {
    var noteList = new NoteList();
    var myText = "My not-so-private note"
    var note = new Note(myText);
    noteList.addNote(note);
    noteList.showNotes();
    if(noteList.showNotes() != noteList.notes) {
      throw(err)
    }
    testPassed();
  } catch(err) {
    testFail(err);
  }
}
