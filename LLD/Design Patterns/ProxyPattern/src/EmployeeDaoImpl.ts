import { UserRole } from "./Enums";

export class EmployeeDaoImpl{
    constructor(
        private id: number,
        private name: string,
        private department: string,
        private salary: number,
        private role: UserRole
    ){}


    getEmployeeDetails(): void {
        console.log(`Employee Details - ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Role: ${this.role}`);
    }

    createEmployee(): void {
        console.log(`Creating employee record for ${this.name}`);
    }

    deleteEmployee(): void {
        console.log(`Deleting employee record for ${this.name}`);
    }
    
    updateSalary(newSalary: number): void {
        this.salary = newSalary;
        console.log(`Updated salary for ${this.name} to ${this.salary}`);
    }

    displayEmployeeDetails(): void {
        console.log(`Employee Details - ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Role: ${this.role}`);
    }
}