// same deal as the binary search tree, translating algoexpert.io's class
// to a factory function just for something different. I'm already familiar
// with classes from Java and C++ so I like trying a different approach.
// Andrew Sokolowski -- Jan. 2020

function createBinaryTree(val) {
  return {
    value: val,
    left: null,
    right: null,
    insert: function(values, i = 0) {
      if (i >= values.length) {
        return;
      }

      const queue = [this];

      while (queue.length > 0) {
        let current = queue.shift();

        if (current.left === null) {
          current.left = createBinaryTree(values[i]);
          break;
        }

        queue.push(current.left);
        if (current.right === null) {
          current.right = createBinaryTree(values[i]);
          break;
        }

        queue.push(current.right);
      }

      this.insert(values, i + 1);
      return this;
    }
  };
}

// breadth-first traversal
// translated from pseudocode for graphs to a binary tree implementation
function BFT(tree) {
  const queue = [];
  let result = '';

  result += tree.value + ' ';
  queue.unshift(tree);
  while (queue.length > 0) {
    const current = queue.pop();
    const left = current.left;
    const right = current.right;

    if (left !== null) {
      result += left.value + ' ';
      queue.unshift(left);
    }

    if (right !== null) {
      result += right.value + ' ';
      queue.unshift(right);
    }
  }

  return result;
}

// meh, already wrote one, might as well write the other
// biggest difference is this one writes to result as each node is visited,
// as opposed to the BFT where I wrote to result the children of each visited
// node... oh yeah, and the whole stack thing
function DFT(tree) {
  const stack = [];
  let result = '';

  stack.push(tree);
  while (stack.length > 0) {
    const current = stack.pop();
    const left = current.left;
    const right = current.right;

    result += current.value + ' ';
    if (right !== null) {
      stack.push(right);
    }

    if (left !== null) {
      stack.push(left);
    }
  }

  return result;
}

module.exports = { createBinaryTree, BFT, DFT };
