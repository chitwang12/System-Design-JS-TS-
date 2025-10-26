import { Direction } from "../Types/enums";
import { ElevatorController } from "./ElevatorController";
import { DispatcherAlgorithm } from "./DispatcherAlgorith";

export class OddEvenDispatcher implements DispatcherAlgorithm {
  getName(): string {
    return "OddEven";
  }

  pickElevator(
    controllers: ElevatorController[],
    floor: number,
    direction: Direction
  ): ElevatorController {
    const isOddFloor = floor % 2 === 1;

    for (let i = 0; i < controllers.length; i++) {
      const isOddElevator = i % 2 === 0;
      if (isOddFloor === isOddElevator) {
        return controllers[i];
      }
    }

    return controllers[0];
  }
}
