const twoNumberSum = require('./twoNumberSum');

function sample2NumSum() {
  const array1 = [5, -2, -10, 6];
  const array2 = [5, -2, -10, 6];

  let key1 = 11;
  let key2 = 12;

  console.log('input array1:', array1);
  console.log('input key1:', key1);
  console.log('output 1:', twoNumberSum(array1, key1));

  console.log('\ninput array2:', array2);
  console.log('input key2:', key2);
  console.log('output 2:', twoNumberSum(array2, key2));
}

module.exports = sample2NumSum;
