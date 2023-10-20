// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 1; j < sortedArr.length  - i; j++) {
      if (sortedArr[j - 1] > sortedArr[j]) {
        const temp = sortedArr[j  - 1];
        sortedArr[j  - 1] = sortedArr[j];
        sortedArr[j] = temp;
      }
    }
  }

  return sortedArr;
}

function selectionSort(arr) {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    let min = sortedArr[i];
    let indexOfMin = i;

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < min) {
        min = sortedArr[j];
        indexOfMin = j;
      }
    }

    sortedArr[indexOfMin] = sortedArr[i];
    sortedArr[i] = min;
  }

  return sortedArr;
}

function mergeSort(arr) { // [4,3,2,1];
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const leftSorted = mergeSort(leftHalf); // [4,3], [4] [2]
  const rightSorted = mergeSort(rightHalf); // [2,1], [3] [1]

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };


