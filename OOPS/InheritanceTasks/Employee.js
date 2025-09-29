class Employee{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    displayDetails(){
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}


class Manager extends Employee{
    constructor(name, id, teamSize){
        super(name, id);
        this.teamSize = teamSize;
    }

    displayDetails(){
        super.displayDetails();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

class Engineer extends Employee{
    constructor(name, id, specialization){
        super(name, id);
        this.specialization = specialization;
    }

    displayDetails(){
        super.displayDetails();
        console.log(`Specialization: ${this.specialization}`);
    }
}



// Example usage
const emp1 = new Employee("Alice", "E001"); 
emp1.displayDetails(); // Name: Alice, ID: E001

const mgr1 = new Manager("Bob", "M001", 10);
mgr1.displayDetails();

const eng1 = new Engineer("Charlie", "EN001", "Software");
eng1.displayDetails();