def sort(arr: list[int]):
    """array bubble sort"""
    for i in range(len(arr)):
        is_swapped = False
        for j in range(len(arr) - 1):
            if arr[j] > arr[j + 1]:
                arr[j + 1], arr[j] = arr[j], arr[j + 1]
                is_swapped = True
        if not is_swapped:
            break
    return arr


print(sort([2, 3, 4, 1, 8, 0, 7]))
