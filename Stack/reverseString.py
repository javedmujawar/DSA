def reverse(str):
    statck = []
    reverseStr = ""
    for char in str:
        statck.append(char)
    while len(statck) > 0:
        reverseStr += statck.pop()
    return reverseStr


print(reverse("123456"))
