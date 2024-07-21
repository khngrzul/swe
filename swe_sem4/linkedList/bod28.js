//Write a JavaScript program to get the index of an element in a Doubly Linked lists.

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
  
    indexOf(data) {
      let index = 0;
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1; 
    }
  }

  const doublyLinkedList = new DoublyLinkedList();
  
  doublyLinkedList.addNode(1);
  doublyLinkedList.addNode(2);
  doublyLinkedList.addNode(3);
  doublyLinkedList.addNode(4);
  doublyLinkedList.addNode(5);
  
  const element = 3;
  const index = doublyLinkedList.indexOf(element);
  if (index !== -1) {
    console.log(`Index of element ${element}:`, index);
  } else {
    console.log(`Element ${element} not found in the Doubly Linked List`);
  }
  