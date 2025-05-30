import { Point } from '../../src/entities/Point';
import { InvalidShapeError } from '../../src/exceptions/InvalidShapeError';

describe('Point', () => {
  it('should return correct dimension and coordinates', () => {
    const point = new Point([1, 2, 3]);
    expect(point.getDimension()).toBe(3);
    expect(point.getCoordinate(1)).toBe(2);
    expect(point.x).toBe(1);
    expect(point.y).toBe(2);
    expect(point.z).toBe(3);
  });

  it('should return 0 for missing z', () => {
    const point = new Point([1, 2]);
    expect(point.z).toBe(0);
  });

  it('should throw InvalidShapeError for empty array or NaN', () => {
    expect(() => new Point([])).toThrow(InvalidShapeError);
    expect(() => new Point([NaN])).toThrow(InvalidShapeError);
  });
});
