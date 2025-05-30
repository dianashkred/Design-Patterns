import { DistanceFromOriginSpecification } from '../../src/specifications/DistanceFromOriginSpecification';
import { Cube } from '../../src/entities/Cube';
import { Oval } from '../../src/entities/Oval';
import { Point } from '../../src/entities/Point';

describe('DistanceFromOriginSpecification', () => {
  it('should match cube within distance range', () => {
    const cube = new Cube(new Point([3, 4, 0]), 1, 'Cube');
    const spec = new DistanceFromOriginSpecification(4, 6); // 5 = √(3^2 + 4^2)
    expect(spec.isSatisfied(cube)).toBe(true);
  });

  it('should not match cube outside range', () => {
    const cube = new Cube(new Point([10, 10, 10]), 1, 'FarCube');
    const spec = new DistanceFromOriginSpecification(0, 5);
    expect(spec.isSatisfied(cube)).toBe(false);
  });

  it('should match oval if any point lies in range', () => {
    const oval = new Oval(new Point([0, 0]), new Point([3, 4]), 'Oval1');
    const spec = new DistanceFromOriginSpecification(5, 6); // 5 from bottomRight
    expect(spec.isSatisfied(oval)).toBe(true);
  });

  it('should reject oval if both points are too far', () => {
    const oval = new Oval(new Point([10, 10]), new Point([15, 15]), 'Oval2');
    const spec = new DistanceFromOriginSpecification(0, 5);
    expect(spec.isSatisfied(oval)).toBe(false);
  });
});
