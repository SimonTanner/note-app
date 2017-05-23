function NoteListView(noteList) {
  this.lists = [];
  if (typeof noteList !== undefined) {
    this.lists.push(noteList);
  }
}

NoteListView.prototype.createHTML = function() {
  html = [];
  for( i = 0; i < this.lists.length; i++) {
    for (x = 0; x < this.lists[i].showNotes().length; x++) {
      html.push('<li><div>' + this.lists[i].showNotes()[x] + '</div></li>');
    }

  }
  return html;
};

NoteListView.prototype.showHTML = function() {
  return ('<ul>' + this.createHTML().join('') + '</ul>');
};
