import { IComparator } from "./IComparator";
import { Shape } from "../entities/Shape";
import { Cube } from "../entities/Cube";
import { Oval } from "../entities/Oval";


export class ByFirstPointXComparator implements IComparator<Shape> {
  compare(a: Shape, b: Shape): number {
    const getX = (s: Shape) =>
      s instanceof Cube
        ? s.corner.x
        : s instanceof Oval
        ? s.topLeft.x
        : 0;

    return getX(a) - getX(b);
  }
}
