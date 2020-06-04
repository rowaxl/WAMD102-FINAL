// Insertion Sort
const numbers = [6, 5, 3, 1, 8, 7, 2, 4];

const insertionSort = (array) => {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        let value = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > value) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = value;
    }
    return array;
};

console.log(insertionSort(numbers));