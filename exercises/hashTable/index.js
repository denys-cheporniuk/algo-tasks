class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor(size = 50) {
    this.size = size;
    this.buckets = Array(this.size).fill(null).map(() => []);
  }

  // Hash function to generate index
  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  // Method to set key-value pair
  set(key, value) {
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash];
    const storedElement = bucket.find((element) => element.key === key);

    if (storedElement) {
      storedElement.value = value;
    } else {
      const node = new HashNode(key, value);
      bucket.push(node);
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash];
    const storedElement = bucket.find((element) => element.key === key);

    return storedElement ? storedElement.value : null;
  }

  delete(key) {
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash];
    const elementIndex = bucket.findIndex((element) => element.key === key);

    if (elementIndex >= 0) {
      bucket.splice(elementIndex, 1);
      return true;
    }

    return false;
  }
}

module.exports = HashTable;
