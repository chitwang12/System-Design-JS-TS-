import { InternalButtonDispatcher } from "../controllers/InternalButtonDispatcher";

export class InternalButton {
  constructor(
    public floor: number,
    private dispatcher: InternalButtonDispatcher
  ) {}

  press() {
    console.log(`[InternalButton] pressed ${this.floor}`);
    this.dispatcher.submitRequest(this.floor);
  }
}
