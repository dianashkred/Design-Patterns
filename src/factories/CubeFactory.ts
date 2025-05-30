import { Point } from '../entities/Point';
import { Cube } from '../entities/Cube';
import { Shape } from '../entities/Shape';
import { CubeValidator } from '../validators/CubeValidator';
import { InvalidShapeError } from '../exceptions/InvalidShapeError';

export class CubeFactory {
  static createFromString(data: string): Shape | null {
    try {
      const trimmed = data.trim();
      const [pointStr, edgeStr] = trimmed.split(';');

      const coordinates = pointStr.split(',').map(Number);
      if (coordinates.some(c => isNaN(c))) {
        throw new InvalidShapeError('Point coordinates contain NaN');
      }

      const edgeLength = parseFloat(edgeStr);
      if (isNaN(edgeLength)) return null;

      if (!CubeValidator.isValid(trimmed)) {
        return null;
      }

      const corner = new Point(coordinates);
      const cube = new Cube(corner, edgeLength, `Cube-${crypto.randomUUID()}`);
      return cube.isValid() ? cube : null;
    } catch (err) {
      if (err instanceof InvalidShapeError) {
        throw err;
      }
      return null;
    }
  }
}
