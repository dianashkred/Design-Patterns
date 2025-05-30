import { Warehouse } from '../src/warehouse/Warehouse';
import { Cube } from '../src/entities/Cube';
import { Point } from '../src/entities/Point';

describe('Warehouse', () => {
  beforeEach(() => {
    // Очистим метрики вручную
    const warehouse = Warehouse.getInstance();
    Object.keys(warehouse.getAllMetrics()).forEach(id => {
      warehouse.remove(id);
    });
  });

  it('should store and retrieve metrics for a shape', () => {
    const cube = new Cube(new Point([1, 2, 3]), 2, 'MyCube');
    const metrics = Warehouse.getInstance().getMetricsById(cube.id);

    expect(metrics).toEqual({
      area: 24,
      volume: 8,
      perimeter: 24,
    });
  });

  it('should remove metrics for a shape', () => {
    const cube = new Cube(new Point([0, 0, 0]), 1, 'RemoveCube');
    const warehouse = Warehouse.getInstance();

    const removed = warehouse.remove(cube.id);
    expect(removed).toBe(true);
    expect(warehouse.getMetricsById(cube.id)).toBeUndefined();
  });

  it('should get all metrics as a record', () => {
    const c1 = new Cube(new Point([0, 0, 0]), 1, 'C1');
    const c2 = new Cube(new Point([1, 1, 1]), 2, 'C2');
    const metrics = Warehouse.getInstance().getAllMetrics();

    expect(Object.keys(metrics)).toEqual(expect.arrayContaining([c1.id, c2.id]));
  });
});
