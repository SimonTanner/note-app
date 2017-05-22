function NoteList() {
  this.notes = [];
}

NoteList.prototype.addNote = function(note) {
  this.notes.push(note);
};

NoteList.prototype.showNotes = function() {
  var textList = [];
  for (var i = 0; i < this.notes.length; i++) {
    textList.push(this.notes[i].text);
  }
  return textList;
};
// module.exports = NoteList;
