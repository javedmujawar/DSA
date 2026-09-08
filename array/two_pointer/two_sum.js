function two_sum(arr, target) {
  const temp = new Map();
  for (var i = 0; i < arr.length; i++) {
    const dif = arr[i] - target;

    if (temp.has(dif)) {
      return [dif, target];
    } else {
      temp.set(arr[i], i);
    }
  }
  return [];
}

console.log(two_sum([0, -1, 2, -3, 1], -2));
console.log(two_sum([2, 11, 15, 7], 9));
