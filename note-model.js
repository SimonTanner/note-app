function Note(text) {
  if(typeof text === undefined) {
    this.text = undefined;
  } else {
    this.text = text;
  }
}

Note.prototype.print = function() {
  return this.text;
};
// module.exports = Note;
