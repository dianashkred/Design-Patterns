import { Point } from '../entities/Point';
import { Cube } from "../entities/Cube";
import { CubeBuilder } from "../builder/CubeBuilder";

export class CubeFactory {
  createShape(points: Point[], builder: CubeBuilder): Cube {
    return builder.setVertices(points).build();
  }
}