// Class 
// In object-oriented programming, a Class is a blueprint or template for creating objects. It is the logical representation that defines a set of attributes (data) and methods (functions) that the objects created from the class will have

class Employee {
    constructor(employeeName = '', salary = 0) {
         this.salary = salary;
         this.employeeName = employeeName;
    }

    // Method to set the employee name
    setName(s) {
         this.employeeName = s;
    }

    // Method to set the salary
    setSalary(val) {
         this.salary = val;
    }

    // Method to get the salary
    getSalary() {
         return this.salary;
    }
}

// Keypoints:
// *  The Employee class acts as a blueprint that has the set of attributes and methods defined in it providing a logical meaning to a real-world entity employee.
//  * The Employee class has a set of attributes (employeeName and salary) and a set of methods (functions like setName, setSalary, getSalary) providing different functionality.



//Object 

// An object is an instance of a class. When an object is created from a class, memory is allocated for it, and it holds the data as specified by the class. An object interacts with other parts of the program, and methods can be called and attributes accessed that belong to it.


const obj1 = new Employee();

// Setting different attributes of object 1 using available methods
obj1.setName("Chitwan"); // Set name to "Raj"
obj1.setSalary(10000); // Set salary to 10,000


// Creating another object of Employee class
const obj2 = new Employee();

// Setting different attributes of object 2 in a similar way
obj2.setName("Rahul"); // Set name to "Rahul"
obj2.setSalary(15000); // Set salary to 15,000

// Accessing the attributes of different objects
console.log("Salary of " + obj1.employeeName + " is " + obj1.getSalary());
console.log("Salary of " + obj2.employeeName + " is " + obj2.getSalary());
