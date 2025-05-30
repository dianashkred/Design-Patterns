import { Shape } from './Shape';
import { Point } from './Point';
import { CubeCalculator } from "../services/CubeCalculator";

export class Cube extends Shape {
  constructor(
    public corner: Point,
    public edgeLength: number,
    name: string
  ) {
    super(name);
  }

  isValid(): boolean {
    return this.edgeLength > 0;
  }

  getPoints() {
    return [this.corner];
  }

  getArea(): number {
    return new CubeCalculator(this).getArea();
  }

  getVolume(): number {
    return new CubeCalculator(this).getVolume();
  }

  getPerimeter(): number {
    return new CubeCalculator(this).getPerimeter();
  }

  setEdgeLength(len: number) {
    this.edgeLength = len;
    this.changed();
  }
}
