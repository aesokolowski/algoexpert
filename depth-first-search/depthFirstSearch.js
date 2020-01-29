//  Andrew Sokolowski       Jan 2020

const Node = require('../utilities/Node');

function depthFirstSearch(array = []) {
  array.push(this.name);		
  for (let child of this.children) {
    array = child.depthFirstSearch(array);
  }

  return array;
}

module.exports = depthFirstSearch;
