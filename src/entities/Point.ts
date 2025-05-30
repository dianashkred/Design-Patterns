import { InvalidShapeError } from '../exceptions/InvalidShapeError';

export class Point {
  constructor(public coordinates: number[]) {
    if (coordinates.length === 0 || coordinates.some((c) => isNaN(c))) {
      throw new InvalidShapeError('Invalid point coordinates');
    }
  }

  getDimension(): number {
    return this.coordinates.length;
  }

  getCoordinate(index: number): number {
    return this.coordinates[index];
  }

  get x(): number {
    return this.coordinates[0];
  }

  get y(): number {
    return this.coordinates[1];
  }

  get z(): number {
    return this.coordinates[2] ?? 0;
  }
}
