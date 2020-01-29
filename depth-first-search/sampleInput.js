const Node = require('../utilities/Node');

Node.prototype.depthFirstSearch = require('./depthFirstSearch');

function sampleDFS() {
  const myNode = new Node('A').addChild('N')
                              .addChild('D')
                              .addChild('Y');

  const node2 = new Node('E').addChild('D')
                             .addChild('A');

  node2.children[0].addChild('W');
  node2.children[1].addChild('R');
  node2.children[1].children[0].addChild('D');

  console.log('myNode:', myNode.depthFirstSearch());
  console.log('node2:', node2.depthFirstSearch());
}

module.exports = sampleDFS;
