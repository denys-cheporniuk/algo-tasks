// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, max = null, min = null) {
  if (min && node.data < min) {
    return false;
  }

  if (max &&  node.data > max) {
    return false;
  }

  if (node.left) {
    const valid = validate(node.left, node.data, min);

    if (!valid) {
      return false;
    }
  }

  if (node.right) {
    const valid = validate(node.right, max, node.data);

    if (!valid) {
      return false;
    }
  }

  return true;
}

module.exports = validate;
