//Write a JavaScript program 
//that implements a stack and checks if two stacks are equal.

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
  
 
    size() {
      return this.items.length;
    }
  

    isEqual(stack2) {
      if (this.size() !== stack2.size()) {
        return false;
      }
  
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] !== stack2.items[i]) {
          return false;
        }
      }
  
      return true; 
    }
  }
  

  const stack1 = new Stack();
  const stack2 = new Stack();
  
  stack1.push(1);
  stack1.push(2);
  stack1.push(3);
  
  stack2.push(1);
  stack2.push(4);
  stack2.push(5);
  
  console.log("Stack 1:", stack1.items); 
  console.log("Stack 2:", stack2.items); 
  
  console.log("Are the stacks equal?", stack1.isEqual(stack2)); 
  