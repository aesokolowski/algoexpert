const createBST = require('../createBst');

const myBst = createBST(9);

console.log('const myBst = createBST(9);');
console.log('myBst:', myBst);

myBst.insert(7);
console.log('myBst.insert(7);');
console.log('myBst:', myBst);

myBst.insert(8);
console.log('myBst.insert(8);');
console.log('myBst:', myBst);

const bst2 = createBST(100).insert(95).insert(105).insert(97).insert(103);

console.log('const bst2 = createBst(100).insert(95).insert(105).insert(97)' +
    '.insert(103);');
console.log('bst2:', bst2);
