import { Point } from './Point';
import { Shape } from './Shape';

export class Oval extends Shape {
  constructor(
    public topLeft: Point,
    public bottomRight: Point,
    public readonly name: string
  ) {
    super(name);
  }

  isValid(): boolean {
    return (
      this.topLeft.getDimension() >= 2 &&
      this.bottomRight.getDimension() >= 2 &&
      this.topLeft.x !== this.bottomRight.x &&
      this.topLeft.y !== this.bottomRight.y &&
      !isNaN(this.topLeft.x) &&
      !isNaN(this.topLeft.y) &&
      !isNaN(this.bottomRight.x) &&
      !isNaN(this.bottomRight.y)
    );
  }
}