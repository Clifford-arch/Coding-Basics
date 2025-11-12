
array=[5,3,2,1,4]

n=len(array)

for i in range (n):
    min_index=i
    for j in range (i+1,n):
        if array[j]<array[min_index]:
            min_index=j
    array[i],array[min_index]=array[min_index],array[i]

print("Sorted Array", array)