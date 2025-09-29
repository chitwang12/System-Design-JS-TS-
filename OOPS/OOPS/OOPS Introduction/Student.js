"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
    setDetails(name, rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
    displayDetails() {
        console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}`);
    }
}
//# sourceMappingURL=Student.js.map