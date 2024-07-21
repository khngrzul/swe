//Write a JavaScript program that implements a stack 
//and checks if at least one element of the stack satisfies a condition.

function atLeastOneSatisfies(stack){
    for(let i=stack.length-1; i=>0; i--) {
        if(stack[i]%2===0){
            return true;
        }
    }
    return false;
}

const stack=[5,20,25,30,45];
console.log("First stack: ", stack);


console.log("At least one element: ", atLeastOneSatisfies(stack));