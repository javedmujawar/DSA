
function removeMidElement(arr) {
    const mid = Math.floor(arr.length / 2)
    const tempArray = [];
    let i = arr.length - 1;
    while (i >= mid) {
        let popItem = arr.pop();
        if (i != mid) {
            tempArray.push(popItem)
        }
        i--;
    }
    while (tempArray.length > 0) {
        arr.push(tempArray.pop())
    }
    return arr;
}

console.log(removeMidElement([1, 2, 3]))