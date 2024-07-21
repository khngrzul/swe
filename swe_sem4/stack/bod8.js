//Write a JavaScript program that implements a stack
// and finds elements that are common in two stacks..

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

    findIntersect(stack2){
        const intersect=new Stack();

        const stack2Set=new Set(stack2.items);
        for(let item of this.items){
            if(stack2Set.has(item)){
                intersect.push(item);
            }
        }
        return intersect;
    }
}

const stack1=new Stack();
const stack2=new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);

stack2.push(2);
stack2.push(3);
stack2.push(4);

console.log("First stack: ", stack1.items);
console.log("Last stack: ", stack2.items);

const intersect=stack1.findIntersect(stack2);
console.log("Intersection: ", intersect.items);