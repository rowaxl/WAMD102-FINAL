function merge(left, right) {
  const merged = [];

  // compare elements of two arrays in same index (do while left.length == right.length)
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  // push left elements of left array(if left.length > right.length)
  while (left.length) {
    merged.push(left.shift());
  }

  // push left elements of right array(if left.length < right.length)
  while (right.length) {
    merged.push(right.shift());
  }

  return merged;
}

function mergeSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }

  // split arrays into two part
  const left = numbers.slice(0, Math.floor(numbers.length/ 2));
  const right = numbers.slice(Math.floor(numbers.length/ 2), numbers.length);

  // sort and merge the elements recursively
  return merge(mergeSort(left), mergeSort(right));
}
