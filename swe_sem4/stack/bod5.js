//Write a JavaScript program that implements a stack and 
//creates a new stack that contains only elements 
//that are in either the first or the second stack, but not in both.

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
        const newStack=new Stack();
        const seen=new Set();

        for (let item of this.items) {
            if (!stack2.includes(item) && !seen.has(item)) {
              newStack.push(item);
              seen.add(item);
            }
          }
          for (let item of stack2) {
            if (!this.items.includes(item) && !seen.has(item)) {
              newStack.push(item);
              seen.add(item);
            }
          }
          return newStack;
    }
}

const stack1=new Stack();
const stack2=new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);

stack2.push(30);
stack2.push(40);
stack2.push(50);

console.log("Stack1: ", stack1.items);
console.log("Stack2: ", stack2.items);

const newStack=stack1.createNewStack(stack2.items);
console.log("New stack: ", newStack.items);
