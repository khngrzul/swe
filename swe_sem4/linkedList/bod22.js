//Write a JavaScript program to create and display Doubly Linked Lists.

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
    }
  
    displayForward() {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      return result.join(" <-> ");
    }
  
   
  }
  
  const doublyLinkedList = new DoublyLinkedList();
  
  doublyLinkedList.addNode(1);
  doublyLinkedList.addNode(2);
  doublyLinkedList.addNode(3);
  doublyLinkedList.addNode(4);
  doublyLinkedList.addNode(5);
  
  console.log("Doubly Linked List: ");
  console.log(doublyLinkedList.displayForward());
  

  