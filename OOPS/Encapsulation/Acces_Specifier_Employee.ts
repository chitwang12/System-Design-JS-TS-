class Employee{
    public name: string;
    protected employeeId : number;
    private salary : number;

    constructor(name: string, employeeId: number, salary: number){
        this.name = name;
        this.employeeId = employeeId;
        if(salary < 0){
            console.log("Invalid salary");
            this.salary = 0;
        }else{
            this.salary = salary;
        }
    }


    //Public method to set Salary
    setSalary(salary: number): void{
        if(salary < 0){
            console.log("Invalid salary");
            this.salary = 0.0;
        }else{
            this.salary = salary;
        }
    }

    //public method to get Salary
    getSalary(): number{
        return this.salary;
    }

    //Public method to deiplay details
    displayDetails() : void{
        console.log(`Name : ${this.name}`);
        console.log(`Employee ID : ${this.employeeId}`);
        console.log(`Salary : ${this.salary}`);
    }
}
    let emp1 = new Employee("Chitwan", 123123, 50000);
    emp1.displayDetails();

    emp1.setSalary(-1000);
    console.log("Updated Salary: " + emp1.getSalary());