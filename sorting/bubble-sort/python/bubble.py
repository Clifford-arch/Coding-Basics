# Bubble Sort
# Time-Complexity = O(n^2)

array=[5,3,2,1,4]

array_size=len(array)

print(array_size)

for i in range (array_size-1):
    for j in range (array_size-i-1):
        if array[j] > array[j+1]:
            array[j],array[j+1]=array[j+1],array[j]


print("sorted array",array)

