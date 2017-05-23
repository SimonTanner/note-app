function NoteListView(noteList) {
  if (typeof noteList === 'undefined') {
    this.lists = [];
  } else {
    this.lists = [noteList];
  }
}

NoteListView.prototype.createHTML = function() {
  html = [];
  if (this.lists.length !== 0) {
    console.log('lists length: ' + this.lists.length);
    console.log(this.lists);
    this.lists.forEach(function(notelist) {
      if (notelist.notes.length !== 0) {
        notelist.showNotes().forEach(function(list) {
          html.push('<li><div>' + list + '</div></li>');
        });
      } else {
        html.push("<li><div></div></li>");
      }
    });
  } else {
    html.push("<li><div></div></li>");
  }
  return html;
};

NoteListView.prototype.showHTML = function() {
  return ('<ul>' + this.createHTML().join('') + '</ul>');
};
