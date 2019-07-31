const BinarySearchTree = require('./BinarySearchTree');
const Queue = require('../queue');

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

function inOrder(bst, arr=[]){

  //left node right
  if(bst.left){
    arr = inOrder(bst.left, arr);
  }
  arr.push(bst.key);

  if(bst.right){
    arr = inOrder(bst.right,arr);
  }
  return arr;
}

function postOrder(bst, arr =[]){
  //left right node

  if(bst.left){
    arr = postOrder(bst.left,arr);
  }
  if(bst.right){
    arr = postOrder(bst.right,arr);
  }
    arr.push(bst.key);
 
  return arr;
}
function preOrder(bst, arr =[]){
  //node left right
  
  arr.push(bst.key);

  if(bst.left){
    arr = preOrder(bst.left, arr);
  }
  if(bst.right){
    arr = preOrder(bst.right, arr);
  }
  return arr;
  
}

function breadthFirstSearch(bst, arr=[]) {
  let queue = new Queue();
  queue.enqueue(bst);
  
  while(queue.first){
  bst = queue.dequeue()
  if(bst.left){
    queue.enqueue(bst.left);
  }
  if(bst.right){
    queue.enqueue(bst.right);
  }
    arr.push(bst.value);
  }
  return arr;
}

function highestProfit(arr) {
  
  let maxProfit = 0;
  for(let i=0;  i < arr.length - 1; i++){
    if(arr[i+1] - arr[i] > maxProfit){
      maxProfit = arr[i+1] - arr[i]
    }
  }
  return maxProfit;
  
}



function main() {
  // let testArrBooks = makeBooks();
  // console.log(testArrBooks);
  // console.log(testArrBooks.length);
  // console.log(binarySearch('title2', 2, testArrBooks));
  // console.log(binarySearch('title12', 12, testArrBooks));

  let newBST = new BinarySearchTree();

  // newBST.insert(25);
  // newBST.insert(15);
  // newBST.insert(50);
  // newBST.insert(10);
  // newBST.insert(24);
  // newBST.insert(35);
  // newBST.insert(70);
  // newBST.insert(4);
  // newBST.insert(12);
  // newBST.insert(18);
  // newBST.insert(31);
  // newBST.insert(44);
  // newBST.insert(66);
  // newBST.insert(90);
  // newBST.insert(22);
  let newBST2 = new BinarySearchTree();

  newBST2.insert(25, 'Captain Picard');
  newBST2.insert(23, 'Commander Riker');
  newBST2.insert(24, 'LaForge');
  newBST2.insert(22, 'Worf');
  newBST2.insert(21, 'Lt. Security Officer');
  newBST2.insert(26, 'Commander Data');
  newBST2.insert(28, 'Lt. Cmdr. Crusher');
  newBST2.insert(27, 'Lt. Selar');

  // console.log(breadthFirstSearch(newBST2));
  //console.log(highestProfit([128,97,121,123,98,97,105]));
  // console.log(`Pre: ${preOrder(newBST)}`);
  // console.log(`Post: ${postOrder(newBST)}`);
  // console.log(`In Order: ${inOrder(newBST)}`)
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