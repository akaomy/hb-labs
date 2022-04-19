'use strict';

// 1. countWords
function countWords(phrase) {
  // Return a dictionary of each word and the no. of times they appear.

  //   You can assume that `phrase` does not contain any punctuation and that
  //   each word is separated with a space.

  //   Arguments:
  //       phrase (str): A string of space-separated words

  //   Returns:
  //       dict: {word: # of times word appears in `phrase`}

  let wordsArray = phrase.toLowerCase().split(' ');
  const wordsTimes = {};
  let count = 1;

  for (let word of wordsArray) {
    // check if word in the array
    if (Object.keys(wordsTimes).includes(word)) {
      wordsTimes[word] = count+1;
    } else {
      wordsTimes[word] = count;
    }
  }
console.log(wordsTimes)
  
}

// countWords('A string of space-separated words words')

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Return the list of melons that cost `price`.

  //   Arguments:
  //       price (float)

  //   Returns:
  //       list: List of melons that cost `price`
  //       None: If there are no melons that cost `price`

  const melon_prices = {
      2.50: ['Cantaloupe', 'Honeydew'],
      2.95: ['Watermelon'],
      3.25: ['Musk', 'Crenshaw'],
      14.25: ['Christmas']
  }

  if (Object.keys(melon_prices).includes(price.toString())) {
    console.log(Object.values(melon_prices[price.toString()]))
  } else {
    console.log('no melons with this price')
  }
}

getMelonsAtPrice(1.25);