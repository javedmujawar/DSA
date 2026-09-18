
const matchAndBalance = (str: string): boolean => {
    const stack = [];
    const pair = { "}": "{", ")": "(", "]": "[]" }
    for (const char of str) {
        // opeing bracke push in stack
        if (char == "(" || char == "[" || char == "{") {
            stack.push(char)
        }
        else if (char == ")" || char == "]" || char == "}") {
            if (stack.pop() !== pair[char])
                return false
        }
    }

    return stack.length === 0;
}

console.log(matchAndBalance("({{}})"))
console.log(matchAndBalance("}{)(][]"))
console.log(matchAndBalance("{{{{{{{}}}}}}"))