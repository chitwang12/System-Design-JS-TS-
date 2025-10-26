import { ElevatorController } from "../controllers/ElevatorController";
import { Direction } from "../models/enums";

export interface DispatcherAlgorithm {
  pickElevator(
    controllers: ElevatorController[],
    floor: number,
    dir: Direction
  ): ElevatorController | null;
}
