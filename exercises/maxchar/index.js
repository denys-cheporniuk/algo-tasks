// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCount = {};

  for (const char of str) {
    if (char in charCount) {
      charCount[char] += 1
    } else {
      charCount[char] = 1
    }
  }

  let max = 0;
  let maxChar = '';

  for (const key in charCount) {
    if (charCount[key] > max) {
      max = charCount[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
