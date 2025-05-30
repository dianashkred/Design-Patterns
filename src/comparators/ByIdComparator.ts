// src/comparators/ByIdComparator.ts
import { IComparator } from "./IComparator";
import { Shape } from "../entities/Shape";

/**
 * Сравнивает фигуры по их уникальному id.
 */
export class ByIdComparator implements IComparator<Shape> {
  compare(a: Shape, b: Shape): number {
    return a.id.localeCompare(b.id);
  }
}