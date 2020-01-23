function twoNumberSum(array, targetSum) {
  array.sort((n, m) => n - m);
	
  for (let i = 0; i < array.length - 1; i++) {
    let n = array[i];
		
    if (n > targetSum) {
      continue;
    }
		
    for (let j = 1; j < array.length; j++) {
      let m = array[j];
			
      if (n + m > targetSum) {
        continue;
      }
			
      if (n + m === targetSum) {
        return [n, m];
      }
    }
  }
	
  return [];
}

module.exports = twoNumberSum;
