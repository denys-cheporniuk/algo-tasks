// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/[^a-z]/g, '').toLowerCase();
  let strB = stringB.replace(/[^a-z]/g, '').toLowerCase();

  if (strA.length !== strB.length) {
    return false;
  }

  const strAMap = {};
  const strBMap = {};

  for (const letter of strA) {
    if (!strB.includes(letter)) {
      return false;
    }

    strAMap[letter] = strAMap[letter] + 1 || 1;
    strBMap[letter] = strBMap[letter] + 1 || 1;
  }

  if (Object.keys(strAMap).length !== Object.keys(strBMap).length) {
    return false;
  }

  for (const key in strAMap) {
    if (strBMap[key] !== strAMap[key]) {
      return false
    }
  }

  return true;
}

module.exports = anagrams;
