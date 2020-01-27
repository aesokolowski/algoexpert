// createBST translated from BST class on algoexpert.io to factory function for 
// no particular reason -- Andrew Sokolowski -- Jan. 2020
// also included is a toString(...) function which prints values in the
// search tree from lowest to highest

function createBST(val) {
  return {
    value: val,
    right: null,
    left: null,
    insert: function(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = createBST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = createBST(value);
        } else {
          this.right.insert(value);
        }
      }

      return this;
    }
  };
}

function inOrderTraverse(bst, str) {
  if (bst.left !== null) {
    str = inOrderTraverse(bst.left, str);
  }

  str += bst.value + ' ';

  if (bst.right !== null) {
    str = inOrderTraverse(bst.right, str);
  }

  return str;
}

function preOrderTraverse(bst, str) {
  str += bst.value + ' ';

  if (bst.left !== null) {
    str = preOrderTraverse(bst.left, str);
  }

  if (bst.right !== null) {
    str = preOrderTraverse(bst.right, str);
  }

  return str;
}

function toString(bst) {
  return inOrderTraverse(bst, '');
}

function toTree(bst) {
  return preOrderTraverse(bst, '');
}

module.exports = { createBST, toString, toTree };
