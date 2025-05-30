import { ByFirstPointXComparator } from '../../src/comparators/ByFirstPointXComparator';
import { Cube } from '../../src/entities/Cube';
import { Point } from '../../src/entities/Point';

describe('ByFirstPointXComparator', () => {
  it('should sort cubes by x of corner', () => {
    const c1 = new Cube(new Point([1, 0, 0]), 1, 'A');
    const c2 = new Cube(new Point([3, 0, 0]), 1, 'B');
    const comparator = new ByFirstPointXComparator();

    expect(comparator.compare(c1, c2)).toBeLessThan(0);
    expect(comparator.compare(c2, c1)).toBeGreaterThan(0);
  });
});
