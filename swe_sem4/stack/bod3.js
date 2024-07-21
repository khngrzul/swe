//Write a JavaScript program that implements a stack and 
//checks if all elements of the stack satisfy a condition.

class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop() {
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

    isEmpty(){
        return this.items.length===0;
    }

    allSatisfy(condition){
        for(let item of this.items){
            if(!condition(item)){
                return false;
            }
        }
        return true; 
    }
}

const stack=new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);

console.log("First stack: ", stack.items);

function condition(element){
    return element%2===0;
}
    
    console.log("All elements that satisfy: ", stack.allSatisfy(condition));
