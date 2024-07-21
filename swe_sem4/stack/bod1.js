//Write a JavaScript program that implements a stack and 
//create a new stack by removing elements that do not satisfy a condition.

function filterStack(stack, condition){
    const filteredStack=[];
    while(!isEmpty(stack)){
        const element=pop(stack);
        if(condition(element)){
            filteredStack.push(element);
        }

    }
    return filteredStack.reverse();
}

function isEmpty(stack){
    return stack.length===0;
}

function push(stack, element){
    stack.push(element);
}

function pop(stack){
    if(!isEmpty(stack)){
        return stack.pop();
    } else {
        return "Underflow";
    }
}

const stack=[];
push(stack, 5);
push(stack, 10);
push(stack, 15);
push(stack, 20);

console.log("First stack: ", stack);

function condition(element){
    return element>10; 

}
const filteredStack=filterStack(stack, condition);
console.log("Last stack: ", filteredStack);
