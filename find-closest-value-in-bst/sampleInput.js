//  Andrew Sokolowski   Jan 2020

const findClosestVal = require('./findClosestValueInBst');
const { createBST } = require('../utilities/bst');

function sampleFCV() {
  const bst1 = createBST(100).insert(95)
                             .insert(97)
                             .insert(105)
                             .insert(107)
                             .insert(106)
                             .insert(10001)
                             .insert(-25)
                             .insert(0);

  console.log(bst1);
}

module.exports = sampleFCV;
