//Write a JavaScript program to check whether a Doubly Linked Lists is empty or not. Return true otherwise false.

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
    }
  
    isEmpty() {
      return this.head === null;
    }
  }
  
  const doublyLinkedList = new DoublyLinkedList();
  console.log("Is Doubly Linked List empty?", doublyLinkedList.isEmpty()); 
  doublyLinkedList.head = new Node(1);
  console.log("Is Doubly Linked List empty?", doublyLinkedList.isEmpty()); 
  