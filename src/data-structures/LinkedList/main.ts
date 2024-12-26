
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

  getPrevNextNodes(index: number) {
    let count = 0;
    let prevNode = this.head;
    let nextNode = prevNode!.next;

    while (count < index - 1) {
      prevNode = prevNode!.next;
      nextNode = prevNode!.next;
      count++;
    }

    return {
      prevNode,
      nextNode
    }
  }

  prepend(value: number) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(value: number, index: number) {
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const node = new Node(value);
    const { prevNode, nextNode } = this.getPrevNextNodes(index);
    prevNode!.next = node;
    node.next = nextNode;
    this.length++;
  }

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

  linkedList.insert(45, 2);

  console.log(linkedList);
})()
