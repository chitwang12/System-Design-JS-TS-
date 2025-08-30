class Employee{
    name;
    _employeeId;
    #salary;

    constructor(name, employeeId, salary){
        this.name = name;
        this.employeeId = employeeId;
        if(salary < 0){
            console.log("Invalid salary");
            this.#salary = 0;
        }else{
            this.#salary = salary;
        }
    }


    //Public method to set Salary
    setSalary(salary){
        if(salary < 0){
            console.log("Invalid salary");
            this.#salary = 0.0;
        }else{
            this.#salary = salary;
        }
    }

    //public method to get Salary
    getSalary(){
        return this.#salary;
    }

    //Public method to deiplay details
    displayDetails(){
        console.log(`Name : ${this.name}`);
        console.log(`Employee ID : ${this.employeeId}`);
        console.log(`Salary : ${this.#salary}`);
    }
}
    let emp1 = new Employee("Chitwan", "E001", 50000);
    emp1.displayDetails();

    emp1.setSalary(-1000);
    console.log("Updated Salary: " + emp1.getSalary());