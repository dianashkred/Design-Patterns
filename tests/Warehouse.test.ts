import { Warehouse } from '../src/patterns/Warehouse';
import { ShapeMetrics } from '../src/types/Metrics';

describe('Warehouse Singleton and Storage Functionality', () => {
  let warehouse: Warehouse;

  beforeEach(() => {
    warehouse = Warehouse.getInstance();
    warehouse.removeAll(); 
  });

  it('should return the same singleton instance', () => {
    const w1 = Warehouse.getInstance();
    const w2 = Warehouse.getInstance();
    expect(w1).toBe(w2);
  });

  it('should save and retrieve shape metrics by ID', () => {
    const metrics: ShapeMetrics = {
      area: 100,
      volume: 200,
      perimeter: 50,
    };
    warehouse.saveMetrics('shape-1', metrics);

    const stored = warehouse.getMetricsById('shape-1');
    expect(stored).toEqual(metrics);
  });

  it('should return undefined for unknown ID', () => {
    const result = warehouse.getMetricsById('unknown-shape');
    expect(result).toBeUndefined();
  });

  it('should return all saved metrics', () => {
    warehouse.saveMetrics('a', { area: 1, volume: 2, perimeter: 3 });
    warehouse.saveMetrics('b', { area: 10, volume: 20, perimeter: 30 });

    const all = warehouse.getAllMetrics();

    expect(all).toHaveProperty('a');
    expect(all).toHaveProperty('b');
    expect(all['a'].area).toBe(1);
    expect(Object.keys(all)).toHaveLength(2);
  });

  it('should remove metrics by ID', () => {
    warehouse.saveMetrics('shape-2', {
      area: 5,
      volume: 5,
      perimeter: 5,
    });

    const removed = warehouse.remove('shape-2');
    const result = warehouse.getMetricsById('shape-2');

    expect(removed).toBe(true);
    expect(result).toBeUndefined();
  });

  it('should clear all metrics', () => {
    warehouse.saveMetrics('x', { area: 9, volume: 9, perimeter: 9 });
    warehouse.saveMetrics('y', { area: 8, volume: 8, perimeter: 8 });

    warehouse.removeAll();

    const all = warehouse.getAllMetrics();
    expect(Object.keys(all)).toHaveLength(0);
  });
});
