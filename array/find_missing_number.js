// array should be sorted

const findMissingNumber = (arr) => {
  const missingValues = [];
  for (var left = 0; left < arr.length - 1; left++) {
    let currentValue = arr[left];
    let nextValue = arr[left + 1];

    while (nextValue - currentValue > 1) {
      currentValue++;
      missingValues.push(currentValue);
    }
  }
  return missingValues;
};

console.log(findMissingNumber([-10,1, 3, 4, 5, 8]));
