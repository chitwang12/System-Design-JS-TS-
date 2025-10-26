import { ExternalButton } from "../buttons/ExternalButton";
import { Direction } from "./enums";

export class Floor {
  public id: number;
  public upButton?: ExternalButton;
  public downButton?: ExternalButton;

  constructor(id: number) {
    this.id = id;
  }

  setButtons(upButton?: ExternalButton, downButton?: ExternalButton): void {
    this.upButton = upButton;
    this.downButton = downButton;
  }

  pressUp(): void {
    this.upButton?.press();
  }

  pressDown(): void {
    this.downButton?.press();
  }

  getId(): number {
    return this.id;
  }
}
