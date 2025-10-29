import { EmployeeDao } from "./EmployeeDao";
import { EmployeeDaoImpl } from "./EmployeeDaoImpl";
import { UserRole } from "./Enums";
import { AccessType } from "./Enums";


// Proxy - controls access
export class EmployeeDaoProxy implements EmployeeDao {
    private realEmployee: EmployeeDaoImpl;
  
    constructor(
      id: number,
      name: string,
      department: string,
      salary: number,
      private role: UserRole
    ) {
      this.realEmployee = new EmployeeDaoImpl(id, name, department, salary, role);
    }
  
    getEmployeeDetails(): void {
      if (this.hasAccess(AccessType.VIEW_BASIC_INFO, this.role)) {
        this.realEmployee.getEmployeeDetails();
      } else {
        throw new Error("Access Denied");
      }
    }
  
    createEmployee(): void {
      if (this.hasAccess(AccessType.CREATE, this.role)) {
        this.realEmployee.createEmployee();
      } else {
        throw new Error("Access Denied");
      }
    }
  
    deleteEmployee(): void {
      if (this.hasAccess(AccessType.DELETE, this.role)) {
        this.realEmployee.deleteEmployee();
      } else {
        throw new Error("Access Denied");
      }
    }
  
    updateSalary(newSalary: number): void {
      if (this.hasAccess(AccessType.UPDATE, this.role)) {
        this.realEmployee.updateSalary(newSalary);
      } else {
        throw new Error("Access Denied");
      }
    }
  
    displayEmployeeDetails(): void {
      if (this.hasAccess(AccessType.VIEW_ALL_DETAILS, this.role)) {
        this.realEmployee.displayEmployeeDetails();
      } else {
        throw new Error("Access Denied");
      }
    }
  
    private hasAccess(accessType: AccessType, role: UserRole): boolean {
      switch (accessType) {
        case AccessType.CREATE:
        case AccessType.DELETE:
          return role === UserRole.ADMIN;
        case AccessType.UPDATE:
          return role === UserRole.ADMIN || role === UserRole.HR;
        case AccessType.VIEW_ALL_DETAILS:
          return [UserRole.MANAGER, UserRole.HR, UserRole.ADMIN].includes(role);
        case AccessType.VIEW_BASIC_INFO:
          return true;
        default:
          return false;
      }
    }
  }