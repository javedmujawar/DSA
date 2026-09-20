# Remove Adjacent Duplicates from String
def adjacent(str):
    stack =[]

    for char in str:
        stackLength = len(stack)-1
        if stackLength >=0 and char == stack[stackLength]:
            stack.pop()
        else:
            stack.append(char)    
    return "".join(stack)




print(adjacent("abbaca"))