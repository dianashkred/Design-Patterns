import { Oval } from '../../src/entities/Oval';
import { Point } from '../../src/entities/Point';
import * as OvalCalculatorModule from '../../src/services/OvalCalculator';
import { Warehouse } from '../../src/warehouse/Warehouse';

describe('Oval', () => {
  const p1 = new Point([0, 5]);
  const p2 = new Point([4, 0]);

  beforeEach(() => {
    jest.clearAllMocks();
    Warehouse.getInstance().removeAll();
  });

  it('should be valid if x1 ≠ x2 and y1 ≠ y2', () => {
    const oval = new Oval(p1, p2, 'ValidOval');
    expect(oval.isValid()).toBe(true);
  });

  it('should be invalid if x1 === x2 or y1 === y2', () => {
    const invalid = new Oval(new Point([1, 2]), new Point([1, 2]), 'Invalid');
    expect(invalid.isValid()).toBe(false);
  });

  it('should call OvalCalculator methods', () => {
    const mockCalc = jest.spyOn(OvalCalculatorModule, 'OvalCalculator')
      .mockImplementation(() => ({
        getArea: () => 42,
        getVolume: () => 0,
        getPerimeter: () => 24,
      }) as any);

    const oval = new Oval(p1, p2, 'MockedOval');
    expect(oval.getArea()).toBe(42);
    expect(oval.getVolume()).toBe(0);
    expect(oval.getPerimeter()).toBe(24);
    expect(mockCalc).toHaveBeenCalled();
  });

  it('should notify observers on setTopLeft and setBottomRight', () => {
    const oval = new Oval(p1, p2, 'ObserverOval');
    const spy = jest.spyOn(Warehouse.getInstance(), 'update');
    oval.setTopLeft(new Point([1, 1]));
    oval.setBottomRight(new Point([3, 3]));
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
