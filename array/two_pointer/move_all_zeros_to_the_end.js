const move_all_zeros_to_the_end = (arr) => {
  let i = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] != 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  return arr;
};

console.log(move_all_zeros_to_the_end([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(move_all_zeros_to_the_end([0, 0, 0, 0, 0, 0, 0, 1]));
