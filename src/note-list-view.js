function NoteListView(noteList) {
  this.lists = [];
  if (typeof noteList !== undefined) {
    this.lists.push(noteList);
  }
}
