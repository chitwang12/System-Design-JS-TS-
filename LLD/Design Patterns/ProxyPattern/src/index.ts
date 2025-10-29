import { UserRole, AccessType } from "./Enums";
import { EmployeeDaoProxy } from "./EmployeeDaoProxy";

// Client
function main() {
    console.log("===== Proxy Design Pattern in TypeScript =====");
  
    const admin = new EmployeeDaoProxy(1, "John", "HR", 30000, UserRole.ADMIN);
    admin.getEmployeeDetails();
    admin.displayEmployeeDetails();
    admin.createEmployee();
    admin.updateSalary(40000);
    admin.deleteEmployee();
  
    console.log("\n-- HR Demo --");
    const hr = new EmployeeDaoProxy(2, "Jane", "HR", 25000, UserRole.HR);
    hr.getEmployeeDetails();
    hr.displayEmployeeDetails();
    hr.updateSalary(30000);
    // hr.deleteEmployee(); // Access Denied
  }
  
  main();