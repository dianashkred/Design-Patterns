import { ByIdComparator } from '../../src/comparators/ByIdComparator';
import { Cube } from '../../src/entities/Cube';
import { Point } from '../../src/entities/Point';

describe('ByIdComparator', () => {
  const comparator = new ByIdComparator();

  it('should compare IDs lexicographically', () => {
    const c1 = new Cube(new Point([0, 0, 0]), 1, 'C1');
    const c2 = new Cube(new Point([0, 0, 0]), 1, 'C2');

    Object.defineProperty(c1, 'id', { value: 'a', writable: true });
    Object.defineProperty(c2, 'id', { value: 'b', writable: true });

    expect(comparator.compare(c1, c2)).toBeLessThan(0);
    expect(comparator.compare(c2, c1)).toBeGreaterThan(0);
    expect(comparator.compare(c1, c1)).toBe(0);
  });
});
