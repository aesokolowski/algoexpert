const getNthFib = require('./nthFibonacci');

console.log('\nnth Fibonacci');
console.log('--------------');

console.log('self-explanatory, starting at 1 (as opposed to 0)\n');

function sampleGNF() {
  for (let i = 1; i < 51; i++) {
    console.log('getNthFib(' + i + ')', getNthFib(i));
  }
}

module.exports = sampleGNF;
