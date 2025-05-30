import { ByNameComparator } from '../../src/comparators/ByNameComparator';
import { Cube } from '../../src/entities/Cube';
import { Point } from '../../src/entities/Point';

describe('ByNameComparator', () => {
  it('should sort shapes by name alphabetically', () => {
    const a = new Cube(new Point([0, 0, 0]), 1, 'Alpha');
    const b = new Cube(new Point([0, 0, 0]), 1, 'Beta');
    const comparator = new ByNameComparator();

    expect(comparator.compare(a, b)).toBeLessThan(0);
    expect(comparator.compare(b, a)).toBeGreaterThan(0);
  });
});
