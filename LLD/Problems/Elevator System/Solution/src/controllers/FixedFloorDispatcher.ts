import { Direction } from "../Types/enums";
import { ElevatorController } from "./ElevatorController";
import { DispatcherAlgorithm } from "./DispatcherAlgorith";

export class FixedFloorDispatcher implements DispatcherAlgorithm {
  private floorRanges: Map<number, number[]>;

  constructor(numElevators: number, maxFloor: number) {
    this.floorRanges = new Map();
    const floorsPerElevator = Math.ceil(maxFloor / numElevators);

    for (let i = 0; i < numElevators; i++) {
      const start = i * floorsPerElevator + 1;
      const end = Math.min((i + 1) * floorsPerElevator, maxFloor);
      this.floorRanges.set(i, [start, end]);
    }
  }

  getName(): string {
    return "FixedFloor";
  }

  pickElevator(
    controllers: ElevatorController[],
    floor: number,
    direction: Direction
  ): ElevatorController {
    for (let i = 0; i < controllers.length; i++) {
      const range = this.floorRanges.get(i);
      if (range && floor >= range[0] && floor <= range[1]) {
        return controllers[i];
      }
    }
    return controllers[0];
  }
}
