class Department{
    private name: string;
    private id: number;

    //Constructor 
    constructor(name: string, id: number){
        this.name= name;
        this.id = id;
    }


    displayDetails(): void{
        console.log(`Department Name: ${this.name}, ID: ${this.id}`);
    }
}


class Employee{
    private name: string;
    private id: number;
    private department: Department; //Aggregation


    //Constructor
    constructor(name: string, id: number, department: Department){
        this.name = name;
        this.id = id;
        this.department = department;
    }

    displayDetails(): void{
        console.log(`Employee Name: ${this.name}, ID: ${this.id}`);
        this.department.displayDetails();
    }
}


//Example usage
const dep = new Department("IT", 101);
const emp = new Employee("Alice", 1, dep);
emp.displayDetails();