//Write a JavaScript program to implement a stack that creates a copy of the stack.

class Stack {
    constructor() {
      this.items = [];
    }
  

    push(element) {
      this.items.push(element);
    }
  
   
    pop() {
      if (this.items.length === 0) {
        return "Underflow"; 
      }
      return this.items.pop();
    }
  
  
    peek() {
      if (this.items.length === 0) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    copy() {
      const copyStack = new Stack();
  
      for (let item of this.items) {
        copyStack.push(item);
      }
  
      return copyStack;
    }
  }
  

  const originalStack = new Stack();
  
  originalStack.push(1);
  originalStack.push(2);
  originalStack.push(3);
  
  console.log("Original stack:", originalStack.items);
  
  const copyStack = originalStack.copy();
  console.log("Copied stack:", copyStack.items);
  

