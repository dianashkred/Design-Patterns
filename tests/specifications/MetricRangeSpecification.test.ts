import { MetricRangeSpecification } from '../../src/specifications/MetricRangeSpecification';
import { Cube } from '../../src/entities/Cube';
import { Oval } from '../../src/entities/Oval';
import { Point } from '../../src/entities/Point';

describe('MetricRangeSpecification', () => {
  it('should match cubes with area in range', () => {
    const cube = new Cube(new Point([0, 0, 0]), 2, 'A');
    const spec = new MetricRangeSpecification('area', 20, 30);
    expect(spec.isSatisfied(cube)).toBe(true);
  });

  it('should reject cubes with perimeter outside range', () => {
    const cube = new Cube(new Point([0, 0, 0]), 1, 'B');
    const spec = new MetricRangeSpecification('perimeter', 20, 25);
    expect(spec.isSatisfied(cube)).toBe(false);
  });

  it('should match ovals with area in range', () => {
    const oval = new Oval(new Point([0, 0]), new Point([6, 3]), 'O1');
    const spec = new MetricRangeSpecification('area', 10, 30);
    expect(spec.isSatisfied(oval)).toBe(true);
  });


  it('should reject ovals with metric not supported (volume)', () => {
    const oval = new Oval(new Point([0, 0]), new Point([3, 3]), 'O2');
    const spec = new MetricRangeSpecification('volume', 0, 10);
    expect(spec.isSatisfied(oval)).toBe(false);
  });
});
