'use strict';

function wordsInCommon(words1, words2) {
  // Return a list of unique words that appear in `words1` and `words2`

  // Arguments:
  //     words1 (list): A list of words
  //     words2 (list): Another list of words

  // Returns:
  //     list: A list of unique words

  const firstString = new Set(words1.split(' '))
  const secondString = new Set(words2.split(' '))
  const result = new Set();
  
  for (let word1 of firstString) {
    if (secondString.has(word1)) {
      result.add(word1)
    }
  }

  console.log('result',result)
}

wordsInCommon('JavaScript allows you you you to index into string and arrays arrays have', 'you will have to know how to get the length of a string string')

function kidsGame(names) {
  // Replace this with your code
}
