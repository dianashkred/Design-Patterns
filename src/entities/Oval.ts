import { Shape } from './Shape';
import { Point } from './Point';
import { OvalCalculator } from "../services/OvalCalculator";
import { CubeVolumeSplitterService } from "../services/CubeVolumeSplitterService";

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
    return new OvalCalculator(this).getArea();
  }

  getVolume(): number {
    return new OvalCalculator(this).getVolume();
  }

  getPerimeter(): number {
    return new OvalCalculator(this).getPerimeter();
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
