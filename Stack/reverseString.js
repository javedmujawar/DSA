// reverse string by using statck

function reverse(str) {
    const statck = [];
    let reverseStr = ""
    for (let i = 0; i < str.length; i++) {
        statck.push(str[i])
    }
    while (statck.length > 0) {
        reverseStr += statck.pop()
    }
    return reverseStr;
}

console.log(reverse("123456"))