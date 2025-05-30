// src/comparators/ByFirstPointXComparator.ts
import { IComparator } from "./IComparator";
import { Shape } from "../entities/Shape";
import { Cube } from "../entities/Cube";
import { Oval } from "../entities/Oval";

/**
 * Сортирует Shape по X первой точки:
 *  - для Cube берёт corner.x
 *  - для Oval берёт topLeft.x
 */
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
