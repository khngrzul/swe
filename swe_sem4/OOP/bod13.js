//Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. 
//Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. 
//Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year; 
    }
    displayDetails(){
        console.log(`make: ${this.make}, model: ${this.model}, year: ${this.year}`);
    }

    }

    class Car extends Vehicle {
        constructor(make, model, year, doors){
           super(make, model, year);
            this.doors=doors; 
        }

        displayDetails(){
            super.displayDetails(); //override
            console.log(`Doors: ${this.doors}`);
        }
    }
    const vehicle=new Vehicle("Toyota", "New", 2000);
    console.log("Vehicle details: ");
    vehicle.displayDetails();

    const car=new Car("Toyoya", "Old", 2001, 4);
    console.log("Car details: ");
    car.displayDetails();
