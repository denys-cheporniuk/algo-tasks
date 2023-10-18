// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(value, nextValue = null) {
    this.data = value;
    this.next = nextValue;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let nodeCount = 0;
    let currentNode = this.head;

    while(currentNode) {
      nodeCount++;
      currentNode = currentNode.next;
    }

    return nodeCount;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      return this.clear()
    }

    let currentNode = this.head.next;
    let prevNode = this.head;

    while(currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    const newNode = new Node(data);

    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(index) {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }

      currentNode = currentNode.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);

    if (!previousNode || !previousNode.next) {
      return;
    }

    previousNode.next = previousNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    previousNode.next = new Node(data, previousNode.next);
  }

  forEach(fn) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      fn(currentNode, index);
      currentNode = currentNode.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;

    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }
}

module.exports = { Node, LinkedList };
