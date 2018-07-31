export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

var vowels = ['a', 'e', 'i', 'o', 'u'];

Entry.prototype.wordCount = function(){
  var arrayOfWords = this.body.split(' ');
  var wordCounter = 0;
  for (var i = 0; i < arrayOfWords.length; i++){
    wordCounter += 1;
  }
  return wordCounter;
};

Entry.prototype.vowelCount = function(){
  var splittedCharLower = this.body.toLowerCase().split('');
  var vowelCounter = 0;
  splittedCharLower.forEach(function(letter){
    vowels.forEach(function(vowel){
      if (letter === vowel){
        vowelCounter += 1;
      }
    });
  });
  return vowelCounter;
};

Entry.prototype.consonantCount = function(){
  var removeSpecialChar = this.body.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  var splittedCharLower = removeSpecialChar.split('');
  var consonantCounter = 0;
  for (var i = 0; i < splittedCharLower.length; i++){
    if  (removeSpecialChar.charAt(i) !== 'a' && removeSpecialChar.charAt(i) !== 'e' && removeSpecialChar.charAt(i) !== 'i' && removeSpecialChar.charAt(i) !== 'o' && removeSpecialChar.charAt(i) !== 'u'){
      consonantCounter += 1;
    }
  }
  // console.log(splittedCharLower);
  // console.log(vowels)


  //
  // for (var i = 0; i < splittedCharLower.length; i++){
  //   if (toFindConsonant(i) === true){
  //     consonantCounter += 1;
  //   }
  // }
  // return consonantCounter;

  // for(var i = 0; i < splittedCharLower.length; i++)
  // {
  //   if(vowels.indexOf(i) === -1)
  //   {
  //     consonantCounter += 1;
  //   }
  // }
  return consonantCounter;

};
// var toFindConsonant = function(removeSpecialChar){
//   var isConsonant = removeSpecialChar.toString().indexOf(vowels);
//   if (isConsonant === -1){
//     return true;
//   } else {
//     return false;
//   }
// };
