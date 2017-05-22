function NoteList() {
  this.notes = [];
}

NoteList.prototype.addNote = function(note) {
  if(note.constructor === Note) {
    this.notes.push(note);
  } else {
    newNote = new Note(note);
    this.notes.push(newNote)
  }
};

NoteList.prototype.showNotes = function() {
  var textList = [];
  for (var i = 0; i < this.notes.length; i++) {
    textList.push(this.notes[i].text);
  }
  return textList;
};

// module.exports = NoteList;
