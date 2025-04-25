import { Shape } from './Shape';
import { Point } from './Point';

export class Cube extends Shape {
  constructor(
    public corner: Point, //вершина
    public edgeLength: number,//длина ребра
    public readonly name: string
  ) {
    super(name);
  }

  isValid(): boolean {
    return this.edgeLength > 0;
  }
}