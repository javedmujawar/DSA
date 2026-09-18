def matchAndBalance(s: str) -> bool:
    pairs = {
        "}": "{",
        ")": "(",
        "]": "["
    }

    stack = []

    for char in s:

        if char in "({[":
            stack.append(char)

        elif char in ")}]":

            if not stack or stack.pop() != pairs[char]:
                return False

    return len(stack) == 0


print(matchAndBalance("({{}})"))       # True
print(matchAndBalance("}{{{{{"))       # False
print(matchAndBalance("{{{{{{{}}}}}}")) # True