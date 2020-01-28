const BT = require('../binaryTree');

// tests are commented out because they more or less get recreated in
// ../../branch-sums/sampleInput.js (which "requires" this file)

const myList = [];

for (let i = 2; i < 101; i++) {
  myList.push(i);
}

const myBT = BT.createBinaryTree(1).insert(myList);

// Remove comment marks to run tests
/* 
console.log('myBT\n----');
console.log('Binary Tree created using insert method');
console.log('breadth-first traversal:', BT.BFT(myBT));
console.log('depth-first traversal:', BT.DFT(myBT));
*/

const bt2 = BT.createBinaryTree(1);

bt2.left = BT.createBinaryTree(2);
bt2.left.left = BT.createBinaryTree(3);
bt2.left.left.left = BT.createBinaryTree(4);
bt2.left.left.left.left = BT.createBinaryTree(5);
bt2.left.left.left.left.left = BT.createBinaryTree(6);
bt2.left.left.left.left.left.left = BT.createBinaryTree(7);
bt2.left.left.left.left.left.right = BT.createBinaryTree(-7);
bt2.left.left.left.left.left.left.left = BT.createBinaryTree(8);
bt2.left.left.left.left.left.left.left.left = BT.createBinaryTree(9);

// Same here
/*
console.log('\nbt2\n---');
console.log('Binary Tree created by creating sub Binary Trees a bunch of ' +
    'lefts with one\nright.');
console.log('breadth-first traversal:', BT.BFT(bt2));
console.log('depth-first traversal:', BT.DFT(bt2));
*/

module.exports = { myBT, bt2 };
