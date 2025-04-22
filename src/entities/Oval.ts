import { Point } from './Point';

export class Oval {
  constructor(
    public id: string,
    public topLeft: Point,
    public bottomRight: Point
  ) {}

  get width(): number {
    return Math.abs(this.bottomRight.x - this.topLeft.x);
  }

  get height(): number {
    return Math.abs(this.bottomRight.y - this.topLeft.y);
  }
}
