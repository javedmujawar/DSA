const A = [1, 2, 3, 4, 7];
const B = [2, 3, 5, 6, 7, 8];

function union(arr1, arr2) {
    const asSet = new Set(arr1);
    const reSet = new Set();
    const res = [];

    for (let i = 0; i < arr2.length; i++) {
        if (asSet.has(arr2[i]) && !reSet.has(arr2[i])) {

            reSet.add(arr2[i])
            res.push(arr2[i])
        }
    }

    return res;
}


console.log(union(A, B));