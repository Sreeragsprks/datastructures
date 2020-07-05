class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert node at start
  insertAtStart = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };

  //  insert node at an index
  insertAtIndex = (data, index) => {
    if (index < 0) {
      console.log("Index unacceptable");
      return;
    }
    if (index > 0 && index > this.size) {
      console.log("Out of range");
      return;
    }
    if (index === 0) {
      insertAtStart(data);
      return;
    } else {
      let node = new Node(data);
      let count = 0;
      let current = this.head;
      let previous;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      node.next = previous.next;
      previous.next = node;
    }
    this.size++;
  };

  // insert node at last
  insertAtLast = (data) => {
    if (!this.head) {
      insertAtStart(data);
    } else {
      let node = new Node(data);
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  };

  // remove node at index
  removeAtIndex = (index) => {
    if (index < 0) {
      console.log("Index not available");
      return;
    }
    if (index && index > this.size) {
      console.log("Out of range");
      return;
    }
    let current = this.head;
    let count = 0;
    let previous;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    console.log("removed element -->", current.data);
  };

  // print list
  printList = () => {
    let current = this.head;
    if (!current) {
      console.log("no node");
      return;
    }
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  };
}

const ll = new LinkedList();
ll.insertAtStart(100);
ll.insertAtLast(200);
ll.insertAtLast(500);
ll.insertAtStart(400);
ll.insertAtIndex(600, 2);
ll.insertAtIndex(900, 3);
ll.printList();
ll.removeAtIndex(2);
ll.printList();
