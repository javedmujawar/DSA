# array should be sorted

def findMissingNumber(arr: list[int]):
    missing_values = []
    for i in range(len(arr)-1):
        current_value = arr[i]
        next_value = arr[i + 1]
        while next_value - current_value > 1:
            current_value = current_value + 1
            missing_values.append(current_value)

    return missing_values


print(findMissingNumber([-10,1, 3, 4, 5, 8]))
