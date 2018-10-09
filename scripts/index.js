var clj_fuzzy = require('clj-fuzzy');
var _ = require('lodash');
var second_amendment = require('./transcripts/second-amendment.js');
var immigration = require('./transcripts/immigration.js');
var mexico = require('./transcripts/mexico.js');

console.log('STARTING UP');

var words = _.words(mexico.text);
var searchWord = 'winter';
var codedSearchWord = clj_fuzzy.phonetics.metaphone(searchWord);
console.log('SEACH_WORD', codedSearchWord);
for (var i = 0; i < words.length; i++) {
  var word = words[i]
    // var rating = clj_fuzzy.metrics.jaccard(searchWord, word);
  var coded = clj_fuzzy.phonetics.metaphone(word);

  // if (rating < 0.5) {
  //   console.log('RATING:', word, rating);
  // }
  if (codedSearchWord == coded) {

    console.log('MATCH', word, ':', coded);
  } else {
    if (codedSearchWord.substr(0, 2) == coded.substr(0, 2)) {
      console.log('START MATCH', word, coded);
    }
    if (codedSearchWord.substr(2, 4) == coded.substr(2, 4)) {
      console.log('end MATCH', word, coded);
    }
    // if (codedSearchWord.substr(4, 6) == coded.substr(4, 6)) {
    //   console.log('3 MATCH', word, coded);
    // }
  }
}
