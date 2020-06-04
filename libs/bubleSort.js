// Bubble Sort
const numbers = [45, 42, 16, 4, 1, 56, 93, 87, 286];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // swap two number's index
        let temp = array[j]
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log('before', numbers);

console.log('after ', bubbleSort(numbers));
