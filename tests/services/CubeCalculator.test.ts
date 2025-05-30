import { Cube } from '../../src/entities/Cube';
import { CubeCalculator } from '../../src/services/CubeCalculator';
import { Point } from '../../src/entities/Point';

describe('CubeCalculator', () => {
  const cube = new Cube(new Point([0, 0, 0]), 2, 'TestCube');
  const calc = new CubeCalculator(cube);

  it('should calculate area correctly', () => {
    expect(calc.getArea()).toBe(24);
  });

  it('should calculate volume correctly', () => {
    expect(calc.getVolume()).toBe(8);
  });

  it('should calculate perimeter correctly', () => {
    expect(calc.getPerimeter()).toBe(24);
  });

  it('should detect if cube lies on coordinate plane', () => {
    expect(calc.baseLiesOnCoordinatePlane()).toBe(true);
  });
});
