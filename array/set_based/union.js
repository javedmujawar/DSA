function union(arr1, arr2) {
    return  [... new Set([...arr1, ...arr2])]
}

console.log(union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));