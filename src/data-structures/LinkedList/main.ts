import { link } from "fs/promises";

class Node {
  next: Node | null = null;

  constructor(
    public value: number
  ) { }
}

class LinkedList {
  head: Node | null = null;
  tail = this.head;
  length = 0;
  constructor() { }

  append(value: number) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value: number) { }

  insert(value: number, index: number) { }

  lookup(index: number) { }

  remove(index: number) { }

  reverse() { }
}

export const linkedList = new LinkedList();

(() => {
  // only for tests
  const linkedList = new LinkedList();
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);

  console.log(linkedList);
})()
