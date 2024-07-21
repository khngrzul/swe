//Write a JavaScript program to get a node in an existing singly linked list.
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.length++;
    }
  
    getNodeAtPosition(position) {
      if (position < 0 || position >= this.length) {
        console.log("Invalid position");
        return null;
      }
  
      let current = this.head;
      let count = 0;
      while (count < position) {
        current = current.next;
        count++;
      }
      return current;
    }
  }
  
  // Create a SinglyLinkedList instance
  const linkedList = new SinglyLinkedList();
  
  // Add nodes to the linked list
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
  
  // Get a node at a specified position
  const position = 3;
  const node = linkedList.getNodeAtPosition(position);
  if (node) {
    console.log(`Node at position ${position}:`, node.data);
  }
  