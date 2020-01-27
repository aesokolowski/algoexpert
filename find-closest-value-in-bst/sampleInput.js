//  Andrew Sokolowski   Jan 2020

const findClosestVal = require('./findClosestValueInBst');
const BST = require('../utilities/bst');

function sampleFCV() {
  const bst1 = BST.createBST(100)
                  .insert(95)
                  .insert(97)
                  .insert(105)
                  .insert(107)
                  .insert(106)
                  .insert(10001)
                  .insert(-25)
                  .insert(0);
  const bst2 = BST.createBST(100)
                  .insert(50)
                  .insert(0)
                  .insert(-50)
                  .insert(-100)
                  .insert(-150)
                  .insert(-125)
                  .insert(-120)
                  .insert(-110);

  let key1 = 106;
  let key2 = 109;
  let key3 = 7000;
  let key4 = -120;
  let key5 = 25;
  let key6 = 7000;

  console.log('\nFind Closest Value in Binary Search Tree');
  console.log('----------------------------------------');
  console.log('Pretty self-explanatory, the hardest part was figuring out how' +
      ' to\nrecursively keep track of the closest number throughout the ' +
      'traversal,\nI find that kind of mind-bending sometimes.\nI don\'t ' +
      'recall why I didn\'t just use an outside (static?) variable?' +
      '\nOne thing to note is that in the case of two equally close values ' +
      'the lower one\nwill be returned since it was encountered first.');

  console.log('\ninput 1 (pre-order traversal):', BST.toTree(bst1));
  console.log('"sorted" (in-order traversal):', BST.toString(bst1));
  console.log('key 1:', key1);
  console.log('result 1:', findClosestVal(bst1, key1));
  console.log('key 2:', key2);
  console.log('result 2:', findClosestVal(bst1, key2));
  console.log('key 3:', key3);
  console.log('result 3:', findClosestVal(bst1, key3));

  console.log('\ninput 2:', BST.toTree(bst2));
  console.log('"sorted":', BST.toString(bst2));
  console.log('key 4:', key4);
  console.log('result 4:', findClosestVal(bst2, key4));
  console.log('key 5:', key5);
  console.log('result 5:', findClosestVal(bst2, key5));
  console.log('key 6:', key6);
  console.log('result 6:', findClosestVal(bst2, key6));
}

module.exports = sampleFCV;
