import { ByFirstPointYComparator } from '../../src/comparators/ByFirstPointYComparator';
import { Oval } from '../../src/entities/Oval';
import { Point } from '../../src/entities/Point';

describe('ByFirstPointYComparator', () => {
  it('should sort ovals by y of topLeft', () => {
    const o1 = new Oval(new Point([0, 2]), new Point([2, 1]), 'O1');
    const o2 = new Oval(new Point([0, 5]), new Point([2, 3]), 'O2');
    const comparator = new ByFirstPointYComparator();

    expect(comparator.compare(o1, o2)).toBeLessThan(0);
    expect(comparator.compare(o2, o1)).toBeGreaterThan(0);
  });
});
