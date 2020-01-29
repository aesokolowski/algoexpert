// Node class from algoexpert.io's Depth-first Search problem translated into
// constructor function because I want to separate my solution from the given
// code into two separate files.  Andrew Sokolowski -- Jan 2020

function Node(name) {
  this.name = name;
  this.children = [];
}

Node.prototype.addChild = function(name) {
  this.children.push(new Node(name));
  return this;
};

module.exports = Node;
