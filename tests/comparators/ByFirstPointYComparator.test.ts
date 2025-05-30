import { ByFirstPointYComparator } from '../../src/comparators/ByFirstPointYComparator';
import { Cube } from '../../src/entities/Cube';
import { Oval } from '../../src/entities/Oval';
import { Point } from '../../src/entities/Point';

describe('ByFirstPointYComparator', () => {
  const comparator = new ByFirstPointYComparator();

  it('should sort ovals by y of topLeft', () => {
    const o1 = new Oval(new Point([0, 2]), new Point([2, 1]), 'O1');
    const o2 = new Oval(new Point([0, 5]), new Point([2, 3]), 'O2');
    expect(comparator.compare(o1, o2)).toBeLessThan(0);
    expect(comparator.compare(o2, o1)).toBeGreaterThan(0);
    expect(comparator.compare(o1, o1)).toBe(0);
  });

  it('should sort cubes by y of corner', () => {
    const c1 = new Cube(new Point([0, 1, 0]), 1, 'C1');
    const c2 = new Cube(new Point([0, 3, 0]), 1, 'C2');
    expect(comparator.compare(c1, c2)).toBeLessThan(0);
    expect(comparator.compare(c2, c1)).toBeGreaterThan(0);
    expect(comparator.compare(c1, c1)).toBe(0);
  });
});
