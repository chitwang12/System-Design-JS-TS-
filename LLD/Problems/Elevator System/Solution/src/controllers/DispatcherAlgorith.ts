import { Direction } from "../Types/enums";
import { ElevatorController } from "./ElevatorController";

export interface DispatcherAlgorithm {
  pickElevator(
    controllers: ElevatorController[],
    floor: number,
    direction: Direction
  ): ElevatorController;
  getName(): string;
}
