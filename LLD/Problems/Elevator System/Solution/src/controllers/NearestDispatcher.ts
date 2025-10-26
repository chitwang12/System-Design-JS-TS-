import { Direction, Status } from "../Types/enums";
import { ElevatorController } from "./ElevatorController";
import { DispatcherAlgorithm } from "./DispatcherAlgorith";

export class NearestDispatcher implements DispatcherAlgorithm {
  getName(): string {
    return "NearestDispatcher";
  }

  pickElevator(
    controllers: ElevatorController[],
    floor: number,
    direction: Direction
  ): ElevatorController {
    let best = controllers[0];
    let minDistance = Math.abs(best.getCar().getCurrentFloor() - floor);

    for (const controller of controllers) {
      const car = controller.getCar();
      const distance = Math.abs(car.getCurrentFloor() - floor);

      const isIdle = car.getStatus() === Status.IDLE;
      const sameDirection = car.getDirection() === direction;
      const isCloser = distance < minDistance;

      if (isIdle && distance <= minDistance) {
        best = controller;
        minDistance = distance;
      } else if (isCloser && !best.getCar().hasDestinations()) {
        best = controller;
        minDistance = distance;
      } else if (sameDirection && isCloser) {
        best = controller;
        minDistance = distance;
      }
    }

    return best;
  }
}
