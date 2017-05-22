function NoteList() {
  this.notes = []
}

NoteList.prototype.addNote = function(note) {
  this.notes.push(note);
}

NoteList.prototype.showNotes = function() {
  return this.notes;
}
// module.exports = NoteList;
