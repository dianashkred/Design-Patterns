import { ISpecification } from "./ISpecification";
import { Shape } from "../entities/Shape";
import { Cube } from "../entities/Cube";
import { Oval } from "../entities/Oval";

export class FirstQuadrantSpecification implements ISpecification<Shape> {
  isSatisfied(shape: Shape): boolean {
    if (shape instanceof Cube) {
      const { x, y, z } = shape.corner;
      return x > 0 && y > 0 && z > 0;
    }
    if (shape instanceof Oval) {
      const { x: x1, y: y1 } = shape.topLeft;
      const { x: x2, y: y2 } = shape.bottomRight;
      return x1 > 0 && y1 > 0 && x2 > 0 && y2 > 0;
    }
    return false;
  }
}
