// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const nodes = [root];
  const result = [1];
  let count = 0;

  while (nodes.length > 0) {
    const node = nodes.shift();

    nodes.push(...node.children);

    if (count === 0 && nodes.length) {
      result.push(nodes.length);
      count = nodes.length;
    }

    count--;
  }

  return result;
}

module.exports = levelWidth;
