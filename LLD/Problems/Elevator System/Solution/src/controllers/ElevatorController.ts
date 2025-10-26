import { ElevatorCar } from "../models/ElevatorCar";
import { Direction } from "../models/enums";

/**
 * ElevatorController manages one ElevatorCar and exposes methods
 * to submit internal/external requests and to tick the car (advance).
 */
export class ElevatorController {
  constructor(private car: ElevatorCar) {}

  getElevator() {
    return this.car;
  }

  // external request from dispatcher
  submitExternalRequest(floor: number, dir: Direction) {
    // external call: add destination to elevator
    this.car.addDestination(floor);
    console.log(
      `[Controller] Elevator#${this.car.id} got external request for floor ${floor} dir ${dir}`
    );
  }

  submitInternalRequest(floor: number) {
    this.car.addDestination(floor);
    console.log(
      `[Controller] Elevator#${this.car.id} got internal request for floor ${floor}`
    );
  }

  // simulate one time-step for this elevator
  tick() {
    // if doors are open from arrival, close them next tick
    if (this.car.door._isOpen) {
      // close door after one tick
      console.log(
        `[Controller] Elevator#${this.car.id} closing door at floor ${this.car.currentFloor}`
      );
      this.car.door.close();
      // after closing, set status appropriately
      if (!this.car.hasDestinations()) {
        this.car.direction = Direction.IDLE;
        // status set inside step/arriveAtFloor as IDLE when no destinations
      } else {
        // determine direction based on nextStop logic inside car
      }
      this.car.display.update(
        this.car.currentFloor,
        this.car.direction,
        this.car.status
      );
      return;
    }

    // otherwise move one step if needed
    const res = this.car.step();
    if (res.arrived) {
      console.log(
        `[Controller] Elevator#${this.car.id} arrived at floor ${this.car.currentFloor}`
      );
      // door opened inside step(); remain open until next tick when controller closes it
    }
  }
}
