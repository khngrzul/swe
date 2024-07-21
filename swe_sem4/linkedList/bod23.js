//Write a JavaScript program to create a singly linked list of n nodes and display it in reverse order.

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
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
    }
  
    displayReverse(node = this.head) {
      if (node === null) {
        return;
      }
      this.displayReverse(node.next);
      console.log(node.data);
    }
  }
  
  const linkedList = new SinglyLinkedList();
  
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
  
  console.log("Singly Linked List in Reverse Order:");
  linkedList.displayReverse();
  