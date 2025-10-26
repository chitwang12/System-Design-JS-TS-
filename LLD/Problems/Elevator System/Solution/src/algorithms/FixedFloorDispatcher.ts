import { DispatcherAlgorithm } from "./DispatcherAlgorithm";
import { ElevatorController } from "../controllers/ElevatorController";
import { Direction } from "../models/enums";

/**
 * Fixed-floor mapping: map ranges of floors to elevators.
 * Example mapping passed in constructor as array of {from, to, elevatorId}.
 * For demo, if no mapping found, fallback to nearest elevator.
 */
export type FloorMap = { from: number; to: number; elevatorId: number }[];

export class FixedFloorDispatcher implements DispatcherAlgorithm {
  constructor(private mapping: FloorMap) {}

  pickElevator(controllers: ElevatorController[], floor: number, dir: Direction) {
    // find mapping range that includes floor
    const entry = this.mapping.find((m) => floor >= m.from && floor <= m.to);
    if (entry) {
      const ctrl = controllers.find((c) => c.getElevator().id === entry.elevatorId);
      if (ctrl) return ctrl;
    }
    // fallback: nearest
    let best: ElevatorController | null = null;
    let bestDist = Number.POSITIVE_INFINITY;
    for (const c of controllers) {
      const dist = Math.abs(c.getElevator().currentFloor - floor);
      if (dist < bestDist) {
        best = c;
        bestDist = dist;
      }
    }
    return best;
  }
}
