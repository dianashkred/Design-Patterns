import { IComparator } from "./IComparator";
import { Shape } from "../entities/Shape";
import { Cube } from "../entities/Cube";
import { Oval } from "../entities/Oval";


export class ByFirstPointYComparator implements IComparator<Shape> {
  compare(a: Shape, b: Shape): number {
    const getY = (s: Shape) =>
      s instanceof Cube ? s.corner.y :
      s instanceof Oval ? s.topLeft.y : 0;

    return getY(a) - getY(b);
  }
} 