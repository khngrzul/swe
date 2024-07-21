//Write a JavaScript program that implements a stack and find elements 
//that are in the first stack but not in the second stack.

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
  
    findDifference(stack2) {
      const differenceStack = new Stack();
  
      const stack2Set = new Set(stack2.items);
  
      for (let item of this.items) {
        if (!stack2Set.has(item)) {
          differenceStack.push(item);
        }
      }
  
      return differenceStack;
    }
  }
  
  const stack1 = new Stack();
  const stack2 = new Stack();
  
  stack1.push(1);
  stack1.push(2);
  stack1.push(3);
  
  stack2.push(3);
  stack2.push(4);
  stack2.push(5);
  
  console.log("Stack 1:", stack1.items); // [1, 2, 3]
  console.log("Stack 2:", stack2.items); // [3, 4, 5]
  
  const differenceStack = stack1.findDifference(stack2);
  console.log("Elements in stack1 but not in stack2:", differenceStack.items); // [1, 2]
  