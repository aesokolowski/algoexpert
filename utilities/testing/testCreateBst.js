const BST = require('../bst');

const myBst = BST.createBST(9);

console.log('const myBst = BST.createBST(9);');
console.log('myBst:', myBst);

myBst.insert(7);
console.log('myBst.insert(7);');
console.log('myBst:', myBst);

myBst.insert(8);
console.log('myBst.insert(8);');
console.log('myBst:', myBst);

const bst2 = BST.createBST(100).insert(95).insert(105).insert(97).insert(103);

console.log('const bst2 = BST.createBst(100).insert(95).insert(105).insert(97)' 
    + '.insert(103);');
console.log('bst2:', bst2);

console.log('BST.toString(myBst):', BST.toString(myBst));
console.log('BST.toString(bst2):', BST.toString(bst2));
