(function() {
  testOne();
  testTwo();
  testThree();
  testFour();
})();

function testFail(error) {
  console.log('Test failed');
  console.log(error);
}

function testOne() {
  console.log('Test 1: Note() creates a new instance of a note');
  try {
    var note = new Note();
    console.log("Test passed");
  } catch(err) {
    testFail(err);
  }
}

function testTwo() {
  console.log('Test 2: Note() takes a note as an argument');
  try {
    var note = new Note('Hello world!');
    if (note.text === undefined) {
      throw(err);
    } else {
      console.log('Test passed');
    }
  } catch(err) {
    testFail(err);
  }
}

function testThree() {
  console.log('Test 3: Note().text stores the argument given');
  try {
    var note = new Note('thing');
    if (note.text === undefined) {
      throw(err);
    } else {
      console.log('Test passed');
    }
  } catch(err) {
    testFail(err);
  }
}

function testFour() {
  console.log('Test 4: Note().print returns the stored text');
  try {
    var myText = 'thing'
    var note = new Note(myText);
    note.print();
    if(note.print() !== myText) {
      throw(err);
    }
    console.log('Test passed');
  } catch(err) {
    testFail(err);
  }
}
