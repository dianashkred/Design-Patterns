import { Shape } from '../../src/entities/Shape';
import { Warehouse } from '../../src/patterns/Warehouse';
import { Point } from '../../src/entities/Point';
 
class TestShape extends Shape {
  constructor(public points: Point[]) {
    super("TestShape");
  }

  getPoints(): Point[] {
    return this.points;
  }

  isValid(): boolean {
    return true;
  }

  getArea(): number {
    return 100;
  }

  getVolume(): number {
    return 200;
  }

  getPerimeter(): number {
    return 300;
  }

  triggerChange() {
    this.changed(); 
  }
}

describe('Shape', () => {
  it('should auto-register in Warehouse and notify on change', () => {
    const shape = new TestShape([new Point([1, 2, 3])]);
    const warehouse = Warehouse.getInstance();

    const before = warehouse.getMetricsById(shape.id);
    expect(before).toEqual({ area: 100, volume: 200, perimeter: 300 });

    shape.triggerChange();
    const after = warehouse.getMetricsById(shape.id);
    expect(after).toEqual({ area: 100, volume: 200, perimeter: 300 });
  });

  it('should attach/detach observers correctly', () => {
    const shape = new TestShape([new Point([1, 2, 3])]);
    const mockObserver = { update: jest.fn() };

    shape.attach(mockObserver);
    shape['observers'].add(mockObserver); 
    shape['changed']();
    expect(mockObserver.update).toHaveBeenCalled();

    shape.detach(mockObserver);
    mockObserver.update.mockClear();
    shape['changed']();
    expect(mockObserver.update).not.toHaveBeenCalled();
  });
});
