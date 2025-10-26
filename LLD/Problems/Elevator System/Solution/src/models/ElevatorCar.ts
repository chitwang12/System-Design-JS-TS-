import { Direction, Status } from "./enums";
import { Display } from "./Display";
import { Door } from "./Door";

export class ElevatorCar {
  public display: Display = new Display();
  public door: Door = new Door();
  public currentFloor: number = 0;
  public direction: Direction = Direction.IDLE;
  public status: Status = Status.IDLE;
  public id: number;
  // destinations sets to prevent duplicates
  private upSet = new Set<number>();
  private downSet = new Set<number>();

  private doorOpenTimer: number = 0;
  private readonly DOOR_OPEN_TIME = 2;

  constructor(id: number, startFloor: number = 0) {
    this.id = id;
    this.currentFloor = startFloor;
  }

  // add destination based on requested floor
  addDestination(floor: number): void {
    if (floor === this.currentFloor) return;

    if (floor > this.currentFloor) {
      this.upSet.add(floor);
    } else {
      this.downSet.add(floor);
    }
    this.updateDirectionIfIdle();
  }

  // get next floor to stop depending on direction
  private getSortedUp(): number[] {
    return Array.from(this.upSet).sort((a, b) => a - b);
  }
  private getSortedDown(): number[] {
    return Array.from(this.downSet).sort((a, b) => b - a);
  }

  hasDestinations(): boolean {
    return this.upSet.size > 0 || this.downSet.size > 0;
  }

  nextStop(): number | null {
    if (this.direction === Direction.UP) {
      const up = this.getSortedUp();
      return up.length > 0
        ? up[0]
        : this.getSortedDown().length > 0
        ? this.getSortedDown()[0]
        : null;
    } else if (this.direction === Direction.DOWN) {
      const down = this.getSortedDown();
      return down.length > 0
        ? down[0]
        : this.getSortedUp().length > 0
        ? this.getSortedUp()[0]
        : null;
    } else {
      // idle: prefer nearest up or down (pick smallest distance)
      const up = this.getSortedUp();
      const down = this.getSortedDown();
      if (up.length === 0 && down.length === 0) return null;
      if (up.length === 0) return down[0];
      if (down.length === 0) return up[0];
      const upDist = Math.abs(up[0] - this.currentFloor);
      const downDist = Math.abs(down[0] - this.currentFloor);
      return upDist <= downDist ? up[0] : down[0];
    }
  }

  // call when arrived at a floor to clear destinations
  arriveAtFloor(floor: number) {
    if (this.upSet.delete(floor)) {
      // removed
    }
    if (this.downSet.delete(floor)) {
      // removed
    }
    // update direction if needed
    if (this.upSet.size === 0 && this.downSet.size === 0) {
      this.direction = Direction.IDLE;
      this.status = Status.IDLE;
    }
  }

  // step one floor toward nextStop; returns whether arrived at a stop
  step(): { moved: boolean; arrived: boolean } {
    const next = this.nextStop();
    if (next === null) {
      // nothing to do
      this.status = Status.IDLE;
      this.direction = Direction.IDLE;
      this.display.update(this.currentFloor, this.direction, this.status);
      return { moved: false, arrived: false };
    }

    if (next > this.currentFloor) {
      this.currentFloor += 1;
      this.direction = Direction.UP;
      this.status = Status.MOVING;
    } else if (next < this.currentFloor) {
      this.currentFloor -= 1;
      this.direction = Direction.DOWN;
      this.status = Status.MOVING;
    }

    // check arrival
    const arrived = next === this.currentFloor;
    if (arrived) {
      this.status = Status.DOOR_OPEN;
      this.door.open();
      this.arriveAtFloor(this.currentFloor);
    }

    this.display.update(this.currentFloor, this.direction, this.status);
    return { moved: true, arrived };
  }

  // if idle, set a direction based on pending destinations
  private updateDirectionIfIdle() {
    if (this.status === Status.IDLE || this.direction === Direction.IDLE) {
      if (this.upSet.size > 0 && this.downSet.size === 0) {
        this.direction = Direction.UP;
      } else if (this.downSet.size > 0 && this.upSet.size === 0) {
        this.direction = Direction.DOWN;
      } else if (this.upSet.size > 0 && this.downSet.size > 0) {
        // choose nearest
        const next = this.nextStop();
        if (next !== null)
          this.direction =
            next > this.currentFloor ? Direction.UP : Direction.DOWN;
      }
      if (this.direction !== Direction.IDLE) this.status = Status.MOVING;
    }
  }

  // for display / debugging
  toString() {
    return `Elevator#${this.id} floor=${this.currentFloor} dir=${
      this.direction
    } status=${
      this.status
    } display=[${this.display.toString()}] up=${JSON.stringify(
      this.getSortedUp()
    )} down=${JSON.stringify(this.getSortedDown())}`;
  }
}
