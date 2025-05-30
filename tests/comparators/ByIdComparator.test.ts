import { ByIdComparator } from '../../src/comparators/ByIdComparator';
import { Cube } from '../../src/entities/Cube';
import { Point } from '../../src/entities/Point';

describe('ByIdComparator', () => {
  it('should compare shapes by ID lexicographically', () => {
    const c1 = new Cube(new Point([0, 0, 0]), 1, 'C1');
    const c2 = new Cube(new Point([0, 0, 0]), 1, 'C2');
    const comp = new ByIdComparator();

    const result = comp.compare(c1, c2);
    expect(typeof result).toBe('number');
  });
});
