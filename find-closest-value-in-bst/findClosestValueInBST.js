function findClosestValueInBst(tree, target) {
  let value = tree.value;
  const left = tree.left;
  const right = tree.right;
  let difference, rightVal, rightDiff;
	
  if (target === value) {
    return target;
  }

  difference = Math.abs(target - value);
	
  if (target < value) {
    let leftVal, leftDiff; 
		
    if (left === null) {
      return value;
    }
		
    leftVal = findClosestValueInBst(left, target);
    leftDiff = Math.abs(target - leftVal);
    return leftDiff <= difference ? leftVal : value;
  }
	
  if (right === null) {
    return value;
  }
	
  rightVal = findClosestValueInBst(right, target);
  rightDiff = Math.abs(target - rightVal);
  return rightDiff <= difference ? rightVal : value;
}

module.exports = findClosestValueInBst;
