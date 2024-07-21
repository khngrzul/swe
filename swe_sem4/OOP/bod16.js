//Write a JavaScript program that creates a class called 'Employee' with properties 
//for name and salary. Include a method to calculate annual salary. 
//Create a subclass called 'Manager' that inherits from the 'Employee' class and 
//adds an additional property for department. Override the annual salary calculation 
//method to include bonuses for managers. Create two instances of the 'Manager' class
// and calculate their annual salary.

class Employee {
    constructor(name, salary) {
        this.name=name;
        this.salary=salary;
    }

    annualSalary(){
        return this.salary*12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department){
        super(name, salary);
        this.department=department;
    }

    annualSalary(){
        const bonus=0.2*this.salary;
        return (this.salary+bonus)*12;
    }
}

const manager1 = new Manager("Khulan", 1000000, "Marketing");
const manager2 = new Manager("Bat", 1200000, "Finance");

// Calculate and display the annual salary of each manager
console.log(`${manager1.name}'s Annual Salary: ${manager1.annualSalary()}`);
console.log(`${manager2.name}'s Annual Salary: ${manager2.annualSalary()}`);