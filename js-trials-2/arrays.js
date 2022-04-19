'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i in items) {
    console.log(i)
  }
}

console.log('printIndices()')
printIndices(['w','e','t', 'y'])

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  for (let i in items) {
    if (i % 2 == 0) {
      console.log(items[i])
    }
  }
}

console.log('everyOtherItem()')
everyOtherItem(['a','b','c', 'd', 'e', 'f'])

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code

  let sorted = items.sort();
  console.log(sorted.slice(0, 5))
}

console.log('smallestNItems()')
smallestNItems([0, 81, 1, -900, -0.899, 900, -4], 4)
