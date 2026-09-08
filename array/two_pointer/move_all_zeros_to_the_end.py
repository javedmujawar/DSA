def move_all_zeros_to_the_end(arr):
    i = 0
    for j in range(len(arr)):
        if arr[j] != 0:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1

    return arr


print(move_all_zeros_to_the_end([1, 2, 0, 4, 3, 0, 5, 0]))
print(move_all_zeros_to_the_end([0, 0, 0, 0, 0, 0, 0, 1]))
