// Interface - Subject
export interface EmployeeDao{
    getEmployeeDetails(): void;
    createEmployee(): void;
    deleteEmployee(): void;
    updateSalary(newSalary: number): void;
    displayEmployeeDetails(): void;
}