#Time-Complexity=O(n^2)
array=[5,3,2,1,4]

n=len(array)

for i in range (1,n):
    insert_ind=i
    current_val=array.pop(i)
    for j in range (i-1,-1,-1):
        if array[j]>current_val:
            insert_ind=j
    array.insert(insert_ind,current_val)

print("Sorted array",array)
