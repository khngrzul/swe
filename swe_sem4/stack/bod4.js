//Write a JavaScript program that implements a stack and
// creates a new stack from a portion of the original stack.

class Stack{
    constructor() {
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length===0){
            return "Underflow";
        }
        return this.items.pop();
    }

    peek(){
        if(this.items.length===0){
            return "Stack is empty";
        }
        return this.items[this.items.length-1];
    }

    isEmpty() {
        return this.items.length===0;
    }

    newStack(startIndex, endIndex){
        const newStack=new Stack();
        if(startIndex<0 || startIndex>=this.items.length 
            || endIndex<0 || endIndex>=this.items.length 
            || startIndex>endIndex) {
        return newStack;
    } 
    for(let i=startIndex; i<=endIndex; i++){
newStack.push(this.items[i]);
    }
    return newStack;
}
}

const stack=new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);

console.log("First stack: ", stack.items);
const newStack=stack.newStack(2,4);
console.log("New stack: ", newStack.items);
