import { Cube } from '../../src/entities/Cube';
import { Point } from '../../src/entities/Point';
import { WarehouseObserver } from '../../src/patterns/WarehouseObserver'; // ← это важно!
import * as CubeCalculatorModule from '../../src/services/CubeCalculator';
import { Warehouse } from '../../src/patterns/Warehouse';

describe('Cube', () => {
  const point = new Point([0, 0, 0]);

  beforeEach(() => {
    jest.clearAllMocks();
    Warehouse.getInstance().removeAll();
  });

  it('should be valid when edgeLength > 0', () => {
    const cube = new Cube(point, 5, 'TestCube');
    expect(cube.isValid()).toBe(true);
  });

  it('should be invalid when edgeLength <= 0', () => {
    const cube = new Cube(point, 0, 'InvalidCube');
    expect(cube.isValid()).toBe(false);
  });

  it('should delegate calculations to CubeCalculator', () => {
    const mock = jest.spyOn(CubeCalculatorModule, 'CubeCalculator')
      .mockImplementation(() => ({
        getArea: () => 150,
        getVolume: () => 300,
        getPerimeter: () => 60,
      }) as any);

    const cube = new Cube(point, 5, 'MockedCube');
    expect(cube.getArea()).toBe(150);
    expect(cube.getVolume()).toBe(300);
    expect(cube.getPerimeter()).toBe(60);
    expect(mock).toHaveBeenCalled();
  });

  it('should notify observers on setEdgeLength', () => {
    const cube = new Cube(point, 3, 'NotifyCube');
    const observer = WarehouseObserver.getInstance();
    cube.attach(observer);

    const spy = jest.spyOn(observer, 'update');
    cube.setEdgeLength(7);
    expect(spy).toHaveBeenCalledWith(cube);
  });
});
