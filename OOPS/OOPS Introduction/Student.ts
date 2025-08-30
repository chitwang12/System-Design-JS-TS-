class Student {
  private name: string;
  private rollNumber: number;

  constructor(name: string, rollNumber: number) {
    this.name = name;
    this.rollNumber = rollNumber;
  }
  public setDetails(name: string, rollNumber: number): void {
    this.name = name;
    this.rollNumber = rollNumber;
  }

  public displayDetails(): void {
    console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}`);
  }
}
