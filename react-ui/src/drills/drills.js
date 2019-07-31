const BinarySearchTree = require('./BinarySearchTree');

class Book {
  constructor(title, dewey) {
  this.title = title;
  this.dewey = dewey;
  }
}

// specificDeweyHelper()

function binarySearch( title, dewey, array, start = 0, end = array.length) {
  // var start = start === undefined ? 0 : start;
  // var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index - 1]; // this is a Book

  console.log(start, end);
  if (item.dewey === dewey) {
    // we put them in an array
    let i = index, j = index;
    while ( array[j].title !== title && array[i].title !== title || ( array[i].dewey === dewey && array[j].dewey === dewey ) ) {
      console.log('i made it to matching dewey');
      i++;
      j--;
    }
    // return matching book
    if (array[j].title === title) { return array[j] }
    if (array[i].title === title) { return array[i] }
    
    return -1; // not found
  } else if (item.dewey < dewey) {
    return binarySearch(title, dewey, array, index + 1, end);
  } else if (item.dewey > dewey) {
    return binarySearch(title, dewey, array, start, index - 1);
  }
}

function makeBooks() {
  // arr -> 0 -> 1000, 
  let title = 'title';
  let dewey = 0;
  let testArr1 = []
  for (let i = 0; i < 15; i++) {
    title = 'title';
    title = title + i;
    dewey = i;
    testArr1.push( new Book(title, dewey));
    if (dewey % 3 === 0) {
      for (let j = 0; j < 2; j++) {
        testArr1.push(new Book(title + j, dewey));
      }
    }
  }
  return testArr1;
}

function main() {
  let testArrBooks = makeBooks();
  console.log(testArrBooks);
  console.log(testArrBooks.length);
  console.log(binarySearch('title2', 2, testArrBooks));
  console.log(binarySearch('title12', 12, testArrBooks));
}
main();


/* 4. Searching in a BST */

/*
in-order: 14 15 19 25 27 35 79 89 90 91
left, node, right

pre-order: 35 25 15 14 19 27 89 79 91 90
node, left, right

postorder: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35
left, right, node

2)

post-order: 
8, 6, 5, 7, 10, 9, 11

*/