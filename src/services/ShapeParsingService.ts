import { Shape } from "../entities/Shape";
import { OvalFactory } from "../factories/OvalFactory";
import { CubeFactory } from "../factories/CubeFactory";

export class ShapeParsingService {
  static parseShape(line: string): Shape | null {
    return OvalFactory.createFromString(line) || CubeFactory.createFromString(line);
  }
}
