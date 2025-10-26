import { Direction, Status } from "./enums";

export class Display {
  private floor: number = 0; //Ground Floor
  private direction: Direction = Direction.IDLE;
  private status: Status = Status.IDLE;

  update(floor: number, direction: Direction, status: Status): void {
    this.floor = floor;
    this.direction = direction;
    this.status = status;
  }

  show(): string {
    return `Floor: ${this.floor}, Direction: ${this.direction}, Status: ${this.status}`;
  }

  toString(): string {
    const d = this.direction === Direction.IDLE ? "-" : this.direction;
    return `Floor : ${this.floor} | Direction: ${d} | Status: ${this.status}`;
  }
}
