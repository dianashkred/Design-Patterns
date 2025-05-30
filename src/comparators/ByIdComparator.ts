import { IComparator } from "./IComparator";
import { Shape } from "../entities/Shape";

export class ByIdComparator implements IComparator<Shape> {
  compare(a: Shape, b: Shape): number {
    return a.id.localeCompare(b.id);
  }
}