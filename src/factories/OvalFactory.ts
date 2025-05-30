import { Point } from '../entities/Point';
import { Oval } from '../entities/Oval';
import { Shape } from '../entities/Shape';
import { OvalValidator } from '../validators/OvalValidator';
import { InvalidShapeError } from '../exceptions/InvalidShapeError';

//создаем овал
export class OvalFactory {
  static createFromString(data: string): Shape | null {
    try {
      const trimmed = data.trim();
      
      if (!OvalValidator.isValid(trimmed)) {
        return null;
      }

      const [p1Raw, p2Raw] = trimmed.split(';');
      const p1 = new Point(p1Raw.split(',').map(Number));
      const p2 = new Point(p2Raw.split(',').map(Number));

      const oval = new Oval(p1, p2, `Oval-${crypto.randomUUID()}`);
      
      return oval.isValid() ? oval : null;
    } catch (err) {
      if (err instanceof InvalidShapeError) {
        throw err;
      }
      return null;
    }
  }
}