const sort = (nums) => {
    let isSwapped = false;
    for (let i = 0; i < nums.length; i++) {
        isSwapped = false;
        for (let j = 0; j < nums.length - i - 1; j++) {
            if(nums[j]>nums[j+1]){
                isSwapped = true;
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
        if (!isSwapped) break;
    }
return nums;
}

const nums = [5, 2, 8, 1, 3];
console.log(sort(nums))

const arr = [2, 3, 4, 1, 8, 0, 7];

for (var i = 0; i < arr.length; i++) {
    let isSwapped= false;
  for (var j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      isSwapped= true;
    }
  }
  if(!isSwapped) break;
}
console.log(arr);


