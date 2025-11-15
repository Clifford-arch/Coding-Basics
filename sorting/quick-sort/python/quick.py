
def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i+1], array[high] = array[high], array[i+1]
    return i+1


def quickSort(array,low=0,high=None):
    if high==None:
        high=len(array)-1

    if low < high:
        pivot=partition(array, low, high)
        quickSort(array, low, pivot-1)
        quickSort(array, pivot+1, high)
    



my_array=[2,4,9,1,3]
quickSort(my_array)
print("Sorted Array",my_array)

