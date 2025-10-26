import { DispatcherAlgorithm } from "../algorithms/DispatcherAlgorithm";
import { ElevatorController } from "./ElevatorController";
import { Direction } from "../models/enums";

/**
 * ExternalButtonDispatcher receives external calls and uses a DispatcherAlgorithm
 * to pick which ElevatorController should serve the request.
 */
export class ExternalButtonDispatcher {
  constructor(
    private controllers: ElevatorController[],
    private algorithm: DispatcherAlgorithm
  ) {}

  submitRequest(floor: number, dir: Direction) {
    const chosen = this.algorithm.pickElevator(this.controllers, floor, dir);
    if (!chosen) {
      console.log("[Dispatcher] No elevator available to serve the request");
      return;
    }
    console.log(
      `[Dispatcher] Chosen elevator ${
        chosen.getElevator().id
      } for floor ${floor} dir ${dir}`
    );
    chosen.submitExternalRequest(floor, dir);
  }
}
