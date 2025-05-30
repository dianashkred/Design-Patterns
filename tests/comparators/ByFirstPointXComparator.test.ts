import { ByFirstPointXComparator } from '../../src/comparators/ByFirstPointXComparator';
import { Cube } from '../../src/entities/Cube';
import { Oval } from '../../src/entities/Oval';
import { Point } from '../../src/entities/Point';

describe('ByFirstPointXComparator', () => {
  const comparator = new ByFirstPointXComparator();

  it('should sort cubes by x of corner', () => {
    const c1 = new Cube(new Point([1, 0, 0]), 1, 'A');
    const c2 = new Cube(new Point([3, 0, 0]), 1, 'B');
    expect(comparator.compare(c1, c2)).toBeLessThan(0);
    expect(comparator.compare(c2, c1)).toBeGreaterThan(0);
    expect(comparator.compare(c1, c1)).toBe(0);
  });

  it('should sort ovals by x of topLeft', () => {
    const o1 = new Oval(new Point([2, 0]), new Point([4, 1]), 'O1');
    const o2 = new Oval(new Point([5, 0]), new Point([7, 1]), 'O2');
    expect(comparator.compare(o1, o2)).toBeLessThan(0);
    expect(comparator.compare(o2, o1)).toBeGreaterThan(0);
    expect(comparator.compare(o1, o1)).toBe(0);
  });

  it('should treat unknown shape types as 0', () => {
    const dummy = { name: 'X', getPoints: () => [], isValid: () => true } as any;
    expect(comparator.compare(dummy, dummy)).toBe(0);
  });
});
