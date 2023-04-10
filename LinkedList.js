import Node from "./Node";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) return (this.head = new Node(value));

    let lastNode = this.head;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    return (lastNode.next = new Node(value));
  }

  prepend(value) {
    if (this.head === null) return (this.head = new Node(value));

    const previousFirstNode = this.head;
    const newHead = new Node(value);

    newHead.next = previousFirstNode;
    return (this.head = newHead);
  }

  size() {
    if (this.head === null) return 0;

    let size = 1;
    let lastNode = this.head;

    while (lastNode.next !== null) {
      size += 1;
      lastNode = lastNode.next;
    }
    return size;
  }

  head() {
    return this.head;
  }

  tail() {
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  at(index) {
    if (typeof index !== "number" || index < 0) return;

    let foundNode = this.head;
    let currentIndex = 0;

    while (foundNode.next !== null && currentIndex < index) {
      currentIndex += 1;
      foundNode = foundNode.next;
    }
    if (index > currentIndex) {
      return undefined;
    }
    return foundNode;
  }

  pop() {
    if (this.head === null) return;

    let previousNode = this.head;
    let lastNode = previousNode.next;

    if (!previousNode.next) {
      this.head = null;
      return previousNode;
    }
    while (lastNode.next !== null) {
      previousNode = lastNode;
      lastNode = lastNode.next;
    }
    const removedNode = previousNode.next;
    previousNode.next = null;
    return removedNode;
  }

  contains(value) {
    if (this.head === null) return false;
    let lastNode = this.head;

    while (lastNode) {
      if (lastNode.value === value) return true;
      lastNode = lastNode.next;
    }
    return false;
  }

  find(value) {
    if (this.head === null) return null;
    let lastNode = this.head;
    let currentIndex = 0;

    while (lastNode) {
      if (lastNode.value === value) return currentIndex;
      lastNode = lastNode.next;
      currentIndex += 1;
    }
    return null;
  }

  toString() {
    if (this.head === null) return "null";

    let result = "";
    let lastNode = this.head;

    const addNodeValue = (value) =>
      (result = result.concat(`( ${value} ) -> `));

    while (lastNode) {
      addNodeValue(lastNode.value);
      lastNode = lastNode.next;
    }
    return result.concat("null");
  }

  insertAt(value, index) {
    if (this.head === null) return this.append(value);
    if (index < 0) return "index cant be lower than 0 ";

    let currentNode = this.head;
    let previousNode = null;
    const newNode = new Node(value);

    if (index === 0) {
      this.head = newNode;
      newNode.next = currentNode;
      return this.head;
    }
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      if (!currentNode) return "index exceeds the length of the list";
      currentNode = currentNode.next;
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
    return this.head;
  }

  removeAt(index) {
    if (this.head === null) return null;
    if (typeof index !== "number" || index < 0) return;
    if (index === 0) return (this.head = this.head.next);

    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        previousNode.next = nextNode;
        return this.head;
      }
      previousNode = currentNode;
      if (!currentNode.next) return "index exceeds the length of the list";
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
  }
}
