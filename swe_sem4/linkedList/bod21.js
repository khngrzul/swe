//Write a JavaScript program to create and display a Singly Linked List.

// Define a Node class representing each node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the SinglyLinkedList class
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node to the end of the linked list
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
  
   
    displayList() {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      return result.join(" -> ");
    }
  }
  
  const linkedList = new SinglyLinkedList();
  

  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
  

  console.log("Singly Linked List:");
  console.log(linkedList.displayList());
  