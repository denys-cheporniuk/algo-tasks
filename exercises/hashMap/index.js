// --- Directions
// Implement classes HashNode and HashMap

class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMap {

  constructor() {
    this.buckets = [];
    this.size = 100;
  }

  #hash(key) {
    let hashValue = 0;

    for (const char of key) {
      hashValue += char.charCodeAt(0);
    }

    return hashValue % this.size;
  }

  set(key, value) {
    const index = this.#hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
      return;
    }

    let currentNode = this.buckets[index];

    while(currentNode) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }

      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        break;
      }
    }

    currentNode.next = new HashNode(key, value);
  }

  get(key) {
    const index = this.#hash(key);
    let currentNode = this.buckets[index];

    while(currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return null

  }

  delete(key) {
    const index = this.#hash(key);
    let currentNode = this.buckets[index];
    let prev = null;

    while(currentNode) {
      if (currentNode.key === key) {
        if (prev) {
          prev.next = currentNode.next;
        } else {
          this.buckets[index] = currentNode.next;
        }

        return currentNode.value;
      }

      prev = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }
}

module.exports = { HashMap };
