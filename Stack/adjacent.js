// # Remove Adjacent Duplicates from String
function adjacent(str) {
    stack = []

    for (char of str) {
        stackLength = stack.length - 1;
        if (stackLength >= 0 && char == stack[stackLength]) {
            stack.pop()
        }
        else {
            stack.push(char)

        }
    }
    return stack.join("")
}


console.log(adjacent("abbaca"))