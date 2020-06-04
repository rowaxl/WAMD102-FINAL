def quick_sort(array):
    # We define our 3 arrays
    less = []
    equal = []
    greater = []
    # if the length of our array is greater than 1
    # we perform a sort
    if len(array) > 1:
        # Select our pivot. This doesn’t have to be
        # the first element of our array
        pivot = array[0]
        # recursively go through every element
        # of the array passed in and sort appropriately
        for x in array:
            if x < pivot:
                less.append(x)
            if x == pivot:
                equal.append(x)
            if x > pivot:
                greater.append(x)
        # recursively call quicksort on gradually smaller and smaller
        # arrays until we have a sorted list.
        return quick_sort(less) + equal + quick_sort(greater)
    else:
        return array

print(quick_sort([17, 51, 40, 5, 87, 92, 100, 37, 45, 54, 32, 39, 70, 62, 31, 50, 47, 77, 44, 11]))
