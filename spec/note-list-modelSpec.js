(function() {
  console.log('note-list-model');
  testOne();
  testTwo();
  testThree();
  testFour();
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
    var myText = "My note"
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
    var myText = "My note";
    var note = new Note(myText);
    noteList.addNote(note);
    noteList.addNote(note);
    var noteListTestArr = [note.text, note.text];
    if(noteList.showNotes().join(" ") !== noteListTestArr.join(" ")) {
      throw(err);
    }
    testPassed();
  } catch(err) {
    testFail(err);
  }
}

function testFour() {
  console.log("Test 4: NoteList().addNote creates and stores a new Note");
  try {
    var noteList = new NoteList();
    noteList.addNote('New note');
    if(noteList.notes[0].constructor != Note) {
      throw(err);
    }
    testPassed();
  } catch(err) {
    testFail(err);
  }
}
