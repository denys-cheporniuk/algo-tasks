/* Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.*/

// FIRST SOLUTION - O(n^2)
function numIdenticalPairs1(nums) {
  let pairs = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        pairs++;
      }
    }
  }

  return pairs;
}


// SECOND SOLUTION O(n)
function numIdenticalPairs(nums) {
  let countMap = new Map();
  let result = 0;

  // Count the occurrences of each number in the array
  for (let num of nums) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  // Calculate the number of good pairs for each number
  for (let count of countMap.values()) {
    result += (count * (count - 1)) / 2;
  }

  return result;
}

module.exports = numIdenticalPairs;
