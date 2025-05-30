import { Oval } from '../../src/entities/Oval';
import { OvalCalculator } from '../../src/services/OvalCalculator';
import { Point } from '../../src/entities/Point';

describe('OvalCalculator', () => {
  const oval = new Oval(new Point([0, 0]), new Point([4, 2]), 'Oval1');
  const calc = new OvalCalculator(oval);

  it('should calculate area correctly', () => {
    expect(calc.getArea()).toBeCloseTo(Math.PI * 2 * 1);
  });

  it('should calculate perimeter approximately', () => {
    const p = calc.getPerimeter();
    expect(p).toBeGreaterThan(0);
  });

  it('should return 0 volume', () => {
    expect(calc.getVolume()).toBe(0);
  });

  it('should identify circles correctly', () => {
    const circle = new Oval(new Point([0, 0]), new Point([2, 2]), 'Circle');
    const ccalc = new OvalCalculator(circle);
    expect(ccalc.isCircle()).toBe(true);
  });
});
