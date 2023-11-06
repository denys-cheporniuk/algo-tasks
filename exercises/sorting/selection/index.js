
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

module.exports = { selectionSort }
