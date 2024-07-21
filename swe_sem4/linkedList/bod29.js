//Write a JavaScript program to convert a Singly Linked list into a string.

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
  
    toString() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' -> ';
        current = current.next;
      }
      return result + 'null';
    }
  }
  
  const linkedList = new SinglyLinkedList();
  
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
 
  console.log("Singly Linked List as string:");
  console.log(linkedList.toString());
  