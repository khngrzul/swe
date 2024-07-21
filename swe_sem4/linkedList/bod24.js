//Write a JavaScript program to create a Doubly Linked Lists of n nodes and count the number of nodes.

class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    countNodes() {
      return this.length;
    }
  }
  
  const doublyLinkedList = new DoublyLinkedList();
  
  doublyLinkedList.addNode(1);
  doublyLinkedList.addNode(2);
  doublyLinkedList.addNode(3);
  doublyLinkedList.addNode(4);
  doublyLinkedList.addNode(5);
  
  const nodeCount = doublyLinkedList.countNodes();
  console.log("Number of nodes in Doubly Linked List:", nodeCount);
  