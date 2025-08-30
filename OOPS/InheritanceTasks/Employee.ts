class Employee{
    protected name: string;
    protected id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

    displayDetails():void{
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}


class Manager extends Employee{
    private teamSize: number;
    constructor(name: string, id:number, teamSize:number){
        super(name, id);
        this.teamSize = teamSize;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

class Engineer extends Employee{
    private specialization: string;
    constructor(name: string, id: number, specialization: string){
        super(name, id);
        this.specialization = specialization;
    }

    displayDetails(): void{
        super.displayDetails();
        console.log(`Specialization: ${this.specialization}`);
    }
}



// Example usage
const emp1 = new Employee("Alice", 1231); 
emp1.displayDetails(); // Name: Alice, ID: E001

const mgr1 = new Manager("Bob", 123211, 10);
mgr1.displayDetails();

const eng1 = new Engineer("Charlie", 1234321, "Software");
eng1.displayDetails();