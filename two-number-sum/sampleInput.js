const twoNumberSum = require('./twoNumberSum');

function sample2NumSum() {
  const array1 = [5, -2, -10, 6];
  const array2 = [1, 8, -7, 19, 22, 10009, 34, -34, -10];

  let key1 = 11;
  let key2 = 12;
  let key3 = -2;
  let key4 = 10009;

  console.log('Two Number Sum\n--------------');
  console.log('find a pair of numbers in a given array that adds up to the ' +
      'given key');
  console.log('note: each array is sorted the second time because the ' +
      'algorithm sorts it the\nfirst time');

  console.log('\ninput array1:', array1);
  console.log('input key1:', key1);
  console.log('output 1:', twoNumberSum(array1, key1));

  console.log('\ninput array1:', array1);
  console.log('input key2:', key2);
  console.log('output 2:', twoNumberSum(array1, key2));

  console.log('\ninput array2:', array2);
  console.log('input key3:', key3);
  console.log('output 3:', twoNumberSum(array2, key3));

  console.log('\ninput array2:', array2);
  console.log('input key4:', key4);
  console.log('output 4:', twoNumberSum(array2, key4));
}

module.exports = sample2NumSum;
