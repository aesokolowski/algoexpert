const Node = require('../utilities/Node');

Node.prototype.depthFirstSearch = require('./depthFirstSearch');

function sampleDFS() {
  const myNode = new Node('A').addChild('N')
                              .addChild('D')
                              .addChild('Y');

  const node2 = new Node('E').addChild('D')
                             .addChild('A');

  console.log('\nDepth-First Search');
  console.log('------------------');
  console.log('Each node has an array of children, which may contain other ' +
      'Nodes. Perform a\ndepth-first search on each, and return an array of ' +
      'all Nodes in each order.');

  node2.children[0].addChild('W');
  node2.children[1].addChild('R');
  node2.children[1].children[0].addChild('D');

  console.log('\nmyNode:');
  console.dir(myNode);
  console.log('myNode.depthFirstSearch():', myNode.depthFirstSearch());
  console.log('\nnode2:');
  console.dir(node2);
  console.log('node2.depthFirstSearch():', node2.depthFirstSearch());
}

module.exports = sampleDFS;
