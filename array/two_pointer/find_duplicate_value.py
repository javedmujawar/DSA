"""find duplicate items"""


def findDuplicate(arr: list[int]):
    left = 0
    result = []
    
    for right in range(1, len(arr)):
  
        if(arr[left]==arr[right]):
            if not result or result[len(result)-1] != arr[right]:
                result.append(arr[right])
        else:
            left = right

    return result


print(findDuplicate([1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]))
