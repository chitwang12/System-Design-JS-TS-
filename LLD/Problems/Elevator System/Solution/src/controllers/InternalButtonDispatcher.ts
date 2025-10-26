import { ElevatorController } from "../controllers/ElevatorController";

/**
 * InternalButtonDispatcher is tied to a single ElevatorController (the car's local dispatcher).
 */
export class InternalButtonDispatcher {
  constructor(private controller: ElevatorController) {}

  submitRequest(floor: number) {
    this.controller.submitInternalRequest(floor);
  }
}
