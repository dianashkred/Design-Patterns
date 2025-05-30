import { ISpecification } from "./ISpecification";
import { Shape } from "../entities/Shape";
import { Cube } from "../entities/Cube";
import { Oval } from "../entities/Oval";

/*Спецификация поиска фигур,
  у которых хотя бы одна точка лежит от начала координат
  на расстоянии в диапазоне [min, max].
 */
export class DistanceFromOriginSpecification
  implements ISpecification<Shape>
{
  constructor(private readonly min: number, private readonly max: number) {}

  isSatisfied(shape: Shape): boolean {
    const pts: { x: number; y: number; z?: number }[] = [];

    if (shape instanceof Cube) {
      pts.push(shape.corner);
    } else if (shape instanceof Oval) {
      pts.push(shape.topLeft, shape.bottomRight);
    } else {
      return false;
    }

    return pts.some(p => {
      const d = Math.hypot(p.x, p.y, p.z ?? 0);
      return d >= this.min && d <= this.max;
    });
  }
}
