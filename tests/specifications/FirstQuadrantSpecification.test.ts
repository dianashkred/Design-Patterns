import { FirstQuadrantSpecification } from '../../src/specifications/FirstQuadrantSpecification';
import { Cube } from '../../src/entities/Cube';
import { Oval } from '../../src/entities/Oval';
import { Point } from '../../src/entities/Point';

describe('FirstQuadrantSpecification', () => {
  const spec = new FirstQuadrantSpecification();

  it('should match cubes entirely in first quadrant', () => {
    const cube = new Cube(new Point([1, 1, 1]), 2, 'C1');
    expect(spec.isSatisfied(cube)).toBe(true);
  });

  it('should not match cubes with negative coordinates', () => {
    const cube = new Cube(new Point([-1, 2, 3]), 2, 'C2');
    expect(spec.isSatisfied(cube)).toBe(false);
  });

  it('should match ovals in first quadrant', () => {
    const oval = new Oval(new Point([1, 1]), new Point([3, 4]), 'O1');
    expect(spec.isSatisfied(oval)).toBe(true);
  });

  it('should not match ovals with points outside first quadrant', () => {
    const oval = new Oval(new Point([-1, 1]), new Point([3, 4]), 'O2');
    expect(spec.isSatisfied(oval)).toBe(false);
  });
});
