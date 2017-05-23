function NoteListView(noteList) {
  this.lists = [];
  if (typeof noteList !== undefined) {
    this.lists.push(noteList);
  }
}

NoteListView.prototype.createHTML = function() {
  html = [];
  this.lists.forEach(function(notelist) {
    notelist.showNotes().forEach(function(list) {
      html.push('<li><div>' + list + '</div></li>');
    });
  });
  return html;
};

NoteListView.prototype.showHTML = function() {
  return ('<ul>' + this.createHTML().join('') + '</ul>');
};
