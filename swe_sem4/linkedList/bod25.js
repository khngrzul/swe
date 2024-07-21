//Write a JavaScript program to create a singly linked list of n nodes and count the number of nodes.

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
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
  
    countNodes() {
      return this.length;
    }
  }
  
  const linkedList = new SinglyLinkedList();
  
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
  
  const nodeCount = linkedList.countNodes();
  console.log("Number of nodes in Singly Linked List:", nodeCount);