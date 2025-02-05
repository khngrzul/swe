//Write a JavaScript program to create a class called 'Rectangle' 
//with properties for width and height. 
//Include two methods to calculate rectangle area and perimeter. 
//Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    calculateArea(){
        return this.width*this.height;
    }
    calculatePerimeter(){
        return 2*(this.width+this.height);
    }
}

const tegshUntsugt=new Rectangle(10,10);
console.log("Area: ", tegshUntsugt.calculateArea());
console.log("Perimeter: ", tegshUntsugt.calculatePerimeter());