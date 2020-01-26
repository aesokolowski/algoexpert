// translated from class on algoexpert.io to factory function for no
// particular reason -- Andrew Sokolowski -- Jan. 2020

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

module.exports = createBST;
