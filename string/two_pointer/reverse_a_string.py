
def reverse(str:str):
    chars = list(str)
    left =0
    right= len(chars)-1
    while(left<right):
        chars[right], chars[left] = chars[left], chars[right]
        left +=1
        right -=1
    return "".join(chars)

print(reverse("hello"))