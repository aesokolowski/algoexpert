//  Andrew Sokolowski     Dec 2019/Jan 2020

function branchSums(root) {
  const branches = [];

  (function findBranches(bt, sum) {
    if (bt.left === null && bt.right === null) {
      branches.push(bt.value + sum);
    } else {
      if (bt.left !== null) {
        findBranches(bt.left, sum + bt.value);
      }
	
      if (bt.right !== null) {
        findBranches(bt.right, sum + bt.value);
      }
    }
  })(root, 0);
}
