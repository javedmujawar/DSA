def two_sum(arr, target):
    seen = {}
    for i, num in enumerate(arr):
        dif = target - num

        if dif in seen:
            return [seen[dif], i]
        seen[arr[i]] = i
    return []


print(two_sum([0, -1, 2, -3, 1], -2))
print(two_sum([2, 11, 15, 7], 9))
