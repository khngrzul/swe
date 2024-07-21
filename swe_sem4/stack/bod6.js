//Write a JavaScript program that 
//implements a stack and creates a new stack 
//that contains all elements from both stacks without duplicates.

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
  
    createNewStack(stack2) {
      const newStack = new Stack();
  
      for (let item of this.items) {
        newStack.push(item);
      }
  
      for (let item of stack2.items) {
        newStack.push(item);
      }
  
      const uniqueItems = new Set(newStack.items);
  
      const finalStack = new Stack();
      for (let item of uniqueItems) {
        finalStack.push(item);
      }
  
      return finalStack;
    }
  }
  
  const stack1 = new Stack();
  const stack2 = new Stack();
  
  stack1.push(1);
  stack1.push(2);
  stack1.push(2);
  
  stack2.push(3);
  stack2.push(4);
  stack2.push(5);
  
  console.log("Stack 1:", stack1.items); 
  console.log("Stack 2:", stack2.items); 
  
  const newStack = stack1.createNewStack(stack2);
  console.log("New stack:", newStack.items);
  