import { Shape } from './Shape';
import { Point } from './Point';

export class Oval extends Shape {
  constructor(
    public topLeft: Point,
    public bottomRight: Point,
    name: string
  ) {
    super(name);
  }

  isValid(): boolean {
    const { x: x1, y: y1 } = this.topLeft;
    const { x: x2, y: y2 } = this.bottomRight;
    return x1 !== x2 && y1 !== y2;
  }

  getPoints() {
    return [this.topLeft, this.bottomRight];
  }

  getArea(): number {
    const a = Math.abs(this.bottomRight.x - this.topLeft.x) / 2;
    const b = Math.abs(this.bottomRight.y - this.topLeft.y) / 2;
    return Math.PI * a * b;
  }

  getVolume(): number {
    return 0;
  }

  getPerimeter(): number {
    const a = Math.abs(this.bottomRight.x - this.topLeft.x) / 2;
    const b = Math.abs(this.bottomRight.y - this.topLeft.y) / 2;
    return Math.PI * (3 * (a + b) - Math.sqrt((3*a + b)*(a + 3*b)));
  }

  setTopLeft(p: Point) {
    this.topLeft = p;
    this.changed();
  }
  setBottomRight(p: Point) {
    this.bottomRight = p;
    this.changed();
  }
}

  /*isValid(): boolean {
    return (
      this.topLeft.getDimension() >= 2 &&
      this.bottomRight.getDimension() >= 2 &&
      this.topLeft.x !== this.bottomRight.x &&
      this.topLeft.y !== this.bottomRight.y &&
      !isNaN(this.topLeft.x) &&
      !isNaN(this.topLeft.y) &&
      !isNaN(this.bottomRight.x) &&
      !isNaN(this.bottomRight.y)
    );*/
