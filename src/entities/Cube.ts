import { Shape } from './Shape';
import { Point } from './Point';

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
    const a = this.edgeLength;
    return 6 * a * a;
  }

  getVolume(): number {
    return this.edgeLength ** 3;
  }

  getPerimeter(): number {
    return 12 * this.edgeLength;
  }

  // метод изменения параметра — вызывает пересчёт
  setEdgeLength(len: number) {
    this.edgeLength = len;
    this.changed();
  }
}
