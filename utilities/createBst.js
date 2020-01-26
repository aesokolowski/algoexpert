// translated from class on algoexpert.io to factory function for no
// particular reason -- Andrew Sokolowski -- Jan. 2020

function createBST(val) {
  return {
    value: val,
    right: null,
    left: null,
    insert: function(valToInsert) {
      if (valToInsert < value) {
        if (left === null) {
          left = createBST(valToInsert);
        } else {
          left.insert(valToInsert);
        }
      } else {
        if (right === null) {
          right = createBST(valToInsert);
        } else {
          right.insert(valToInsert);
        }
      }
    }
  };
}
