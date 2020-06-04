def selection_sort(array):
  i = 0
  while i<len(array):
    #smallest element in the sublist
    smallest = min(array[i:])

    #index of smallest element
    index_of_smallest = array.index(smallest)
    #swapping
    array[i], array[index_of_smallest] = array[index_of_smallest], array[i]

    i = i + 1

  return array

print (selection_sort([16, 19, 11, 15, 10, 12, 14]))