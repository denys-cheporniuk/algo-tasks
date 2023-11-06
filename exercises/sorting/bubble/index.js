
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

module.exports = { bubbleSort }
