#!/usr/bin/env node
import readline from "readline";
import { Building } from "./models/Building";
import { ElevatorController } from "./controllers/ElevatorController";
import { ExternalButton } from "./buttons/ExternalButton";
import { InternalButton } from "./buttons/InternalButton";
import { InternalButtonDispatcher } from "./controllers/InternalButtonDispatcher";
import { ExternalButtonDispatcher } from "./controllers/ExternalButtonDispatcher";
import { OddEvenDispatcher } from "./algorithms/OddEvenDispatcher";
import { FixedFloorDispatcher } from "./algorithms/FixedFloorDispatcher";
import { Direction } from "./models/enums";


// Refer to README.md for instructions on how to run this simulation. 

// create building with floors and elevators
const NUM_FLOORS = 10;
const NUM_ELEVATORS = 3;

const building = new Building(NUM_FLOORS, NUM_ELEVATORS);

// create controllers for each elevator
const controllers: ElevatorController[] = building.elevators.map(
  (e) => new ElevatorController(e)
);

// attach external buttons to floors using an odd-even dispatcher by default
const oddEvenAlg = new OddEvenDispatcher();
const fixedAlg = new FixedFloorDispatcher([
  { from: 0, to: 3, elevatorId: 0 }, // elevator 0 serves floors 0-3
  { from: 4, to: 6, elevatorId: 1 }, // elevator 1 serves floors 4-6
  { from: 7, to: 9, elevatorId: 2 }, // elevator 2 serves floors 7-9
]);

// choose dispatcher algorithm (toggle between oddEvenAlg / fixedAlg)
const dispatcher = new ExternalButtonDispatcher(controllers, oddEvenAlg);

// wire external buttons to floors
for (const f of building.floors) {
  // up button (except top floor)
  if (f.id < NUM_FLOORS - 1) {
    f.upButton = new ExternalButton(f.id, Direction.UP, dispatcher);
  }
  // down button (except ground floor)
  if (f.id > 0) {
    f.downButton = new ExternalButton(f.id, Direction.DOWN, dispatcher);
  }
}

// create an internal dispatcher & buttons for each elevator (per-car)
const internalDispatchers = controllers.map(
  (ctrl) => new InternalButtonDispatcher(ctrl)
);
const internalButtons = internalDispatchers.map((d) =>
  Array.from({ length: NUM_FLOORS }, (_, floor) => new InternalButton(floor, d))
);

// CLI setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "cmd> ",
});

console.log("Elevator System Simulation");
console.log("Commands:");
console.log("  external <floor> <UP|DOWN>     - press external button");
console.log(
  "  internal <elevatorId> <floor> - press internal button inside elevator"
);
console.log("  tick <n?>                      - advance n ticks (default 1)");
console.log("  status                          - print elevator status");
console.log(
  "  useFixed                        - switch dispatcher to FixedFloorDispatcher"
);
console.log(
  "  useOdd                          - switch dispatcher to OddEvenDispatcher"
);
console.log("  quit");

rl.prompt();

rl.on("line", (line) => {
  const parts = line.trim().split(/\s+/);
  const cmd = parts[0];

  try {
    if (cmd === "external") {
      const floor = Number(parts[1]);
      const dir = parts[2] as "UP" | "DOWN";
      if (isNaN(floor) || !["UP", "DOWN"].includes(dir)) {
        console.log("Usage: external <floor> <UP|DOWN>");
      } else {
        const btn =
          dir === "UP"
            ? building.getFloor(floor)?.upButton
            : building.getFloor(floor)?.downButton;
        if (!btn) console.log("No such button on this floor/direction");
        else btn.press();
      }
    } else if (cmd === "internal") {
      const eid = Number(parts[1]);
      const floor = Number(parts[2]);
      if (isNaN(eid) || isNaN(floor)) {
        console.log("Usage: internal <elevatorId> <floor>");
      } else {
        const btn = internalButtons[eid]?.[floor];
        if (!btn) console.log("No such elevator or floor");
        else btn.press();
      }
    } else if (cmd === "tick") {
      const n = parts[1] ? Number(parts[1]) : 1;
      for (let i = 0; i < n; i++) {
        controllers.forEach((c) => c.tick());
      }
    } else if (cmd === "status") {
      controllers.forEach((c) => {
        console.log(c.getElevator().toString());
      });
    } else if (cmd === "useFixed") {
      // switch algorithm
      // note: in this simple demo we replace the dispatcher's algorithm by reconstructing dispatcher
      (dispatcher as any).algorithm = fixedAlg;
      console.log("Switched dispatcher algorithm to FixedFloorDispatcher");
    } else if (cmd === "useOdd") {
      (dispatcher as any).algorithm = oddEvenAlg;
      console.log("Switched dispatcher algorithm to OddEvenDispatcher");
    } else if (cmd === "quit") {
      rl.close();
      return;
    } else {
      console.log("Unknown command");
    }
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }

  rl.prompt();
}).on("close", () => {
  console.log("Exiting simulation.");
  process.exit(0);
});
