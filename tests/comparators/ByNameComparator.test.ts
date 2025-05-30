import { ByNameComparator } from '../../src/comparators/ByNameComparator';
import { Cube } from '../../src/entities/Cube';
import { Point } from '../../src/entities/Point';

describe('ByNameComparator', () => {
  const comparator = new ByNameComparator();

  it('should compare names alphabetically', () => {
    const shape1 = new Cube(new Point([0, 0, 0]), 1, 'Alpha');
    const shape2 = new Cube(new Point([0, 0, 0]), 1, 'Beta');
    const shape3 = new Cube(new Point([0, 0, 0]), 1, 'Alpha');

    expect(comparator.compare(shape1, shape2)).toBeLessThan(0);
    expect(comparator.compare(shape2, shape1)).toBeGreaterThan(0);
    expect(comparator.compare(shape1, shape3)).toBe(0);
  });
});
