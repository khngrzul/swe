// Write a JavaScript program that creates a class called 'Shape' with a method to 
//calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit 
//from the 'Shape' class and override the area calculation method. 
//Create an instance of the 'Circle' class and calculate its area. Similarly, 
//do the same for the 'Triangle' class.

class Shape {
    calculateArea(){
        return "Area calculation...";
    }
}

class Circle extends Shape {
    constructor(Radius){
        super();
        this.Radius=Radius;
    }

    calculateArea(){
        return Math.PI*this.Radius*this.Radius;
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base=base;
        this.height=height;

    }
    calculateArea(){
        return 0.5*this.base*this.height;
    }
}

const circle=new Circle(5);
console.log("Area of the circle: ", circle.calculateArea());

const triangle=new Triangle(20, 30);
console.log("Area of the triangle: ", triangle.calculateArea());