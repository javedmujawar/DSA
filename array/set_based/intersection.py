A = [1, 2, 3, 4, 7];
B = [2, 3, 5, 6, 7, 8];

def union(arr1, arr2):
    asSet = set(arr1);
    reSet = set();
    res = [];

    for i,value in enumerate(arr2):
        if value in asSet:
            res.append(value)

    return res



print(union(A, B));