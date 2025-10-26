import { Floor } from "./Floor";
import { ElevatorCar } from "./ElevatorCar";

export class Building {
  public floors: Floor[] = [];
  public elevators: ElevatorCar[] = [];

  constructor(public numFloors: number, public numElevators: number) {
    for (let i = 0; i < numFloors; i++) {
      this.floors.push(new Floor(i));
    }
    for (let id = 0; id < numElevators; id++) {
      this.elevators.push(new ElevatorCar(id, 0));
    }
  }

  getFloor(floor: number): Floor | undefined {
    return this.floors.find((f) => f.id === floor);
  }

  getElevatorById(id: number): ElevatorCar | undefined {
    return this.elevators.find((e) => e.id === id);
  }
}
