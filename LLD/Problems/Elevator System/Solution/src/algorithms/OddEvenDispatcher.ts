import { DispatcherAlgorithm } from "./DispatcherAlgorithm";
import { ElevatorController } from "../controllers/ElevatorController";
import { Direction } from "../models/enums";

/**
 * Simple odd-even algorithm:
 * - If floor is even -> prefer even elevator ids
 * - If floor is odd  -> prefer odd elevator ids
 * Falls back to nearest by floor distance if no exact parity elevator available.
 */
export class OddEvenDispatcher implements DispatcherAlgorithm {
  pickElevator(
    controllers: ElevatorController[],
    floor: number,
    dir: Direction
  ) {
    if (controllers.length === 0) return null;
    // prefer same parity elevator
    const parity = floor % 2;
    const sameParity = controllers.filter(
      (c) => c.getElevator().id % 2 === parity
    );
    const pool = sameParity.length > 0 ? sameParity : controllers;
    // pick controller whose elevator is nearest (by absolute floor distance)
    let best: ElevatorController | null = null;
    let bestDist = Number.POSITIVE_INFINITY;
    for (const c of pool) {
      const dist = Math.abs(c.getElevator().currentFloor - floor);
      if (dist < bestDist) {
        best = c;
        bestDist = dist;
      }
    }
    return best;
  }
}
