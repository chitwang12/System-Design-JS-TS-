"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(length, width) {
        this.length = length ? length : 1.0; // Default to 1.0 if not provided
        this.width = width ? width : 1.0; // Default to 1.0 if not provided
        this.area = this.length * this.width; // Calculate area
    }
    //calculateArea()
    calculateArea() {
        this.area = this.length * this.width;
        return this.area;
    }
    //displayArea() 
    displayArea() {
        console.log(`Length : ${this.length.toFixed(2)})`);
        console.log(`Width : ${this.width.toFixed(2)}`);
        console.log(`Area : ${this.area.toFixed(2)}`);
    }
}
//Driver Code 
const r1 = new Rectangle();
r1.calculateArea();
r1.displayArea();
const r2 = new Rectangle(10.00, 5.21);
r2.calculateArea();
r2.displayArea();
//# sourceMappingURL=Constructors.js.map