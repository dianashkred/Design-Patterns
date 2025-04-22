import { Oval } from '../entities/Oval';
import { Point } from '../entities/Point';

export class OvalFactory {
  static create(id: string, x1: number, y1: number, x2: number, y2: number): Oval {
    return new Oval(id, new Point(x1, y1), new Point(x2, y2));
  }
}
