export function Entry(title, body) {
  this.title = title
  this.body = body
};

Entry.prototype.wordCount = function(){
  var arrayOfWords = this.body.split(' ');
  var wordCounter = 0;
  for (var i = 0; i < arrayOfWords.length; i++){
    wordCounter += 1;
}
  return wordCounter;
};
