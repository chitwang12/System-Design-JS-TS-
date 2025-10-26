import { Direction } from "../models/enums";
import { ExternalButtonDispatcher } from "../controllers/ExternalButtonDispatcher";

export class ExternalButton {
  constructor(
    public floor: number,
    public direction: Direction,
    private dispatcher: ExternalButtonDispatcher
  ) {}

  press() {
    console.log(
      `[ExternalButton] pressed on floor ${this.floor} dir ${this.direction}`
    );
    this.dispatcher.submitRequest(this.floor, this.direction);
  }
}
