//  Andrew Sokolowski       Jan 2020

const branchSums = require('./branchSums');
const BT = require('../utilities/binaryTree');
const { myBT, bt2 } = require('../utilities/testing/testBinaryTree');

function sampleBranchSums() {
  //  I already have two binary trees in another file (to test the Binary Tree
  //  itself) so why make more?
  console.log('\nBranch Sums\n-----------');
  console.log('Find the "branch sum" for each path you can take from a leaf ' +
      'to the root, return\nin an array.');
  console.log('\nmyBT: used the factory function to insert initial value and ' +
      'the insert method to\nadd an array of 99 initial values');
  console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
  console.log('myBT, breadth-first traversal:', BT.BFT(myBT));
  console.log('myBT, depth-first traversal:', BT.DFT(myBT));
  console.log('branchSums(myBT):', branchSums(myBT));
}

module.exports = sampleBranchSums;
