function findDuplicate(arr) {
  let left = 0;
  const result = [];
  for (var right = 1; right < arr.length; right++) {
    if (arr[left] == arr[right]) {
      if (result[result.length - 1] !== arr[left]) {
        result.push(arr[left]);
      }
    } else {
      left = right;
    }
  }
  return result;
}

console.log(findDuplicate([1, 1, 1, 2,2, 3, 4, 4, 5, 6, 7, 7, 8]));
