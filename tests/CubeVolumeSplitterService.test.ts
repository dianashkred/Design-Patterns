import { Cube } from '../src/entities/Cube';
import { Point } from '../src/entities/Point';
import { CubeVolumeSplitterService } from '../src/services/CubeVolumeSplitterService';

describe('CubeVolumeSplitterService', () => {
  it('should split volume asymmetrically', () => {
    const cube = new Cube(new Point([0, 0, 0]), 10, 'SplitCube');
    const splitter = new CubeVolumeSplitterService(cube);

    const result = splitter.splitByPlane('XY', 7);

    expect(result.lowerVolume).toBeCloseTo(700);
    expect(result.upperVolume).toBeCloseTo(300);
    expect(result.lowerPercent).toBeCloseTo(70);
    expect(result.upperPercent).toBeCloseTo(30);
  });

  it('should detect symmetric split', () => {
    const cube = new Cube(new Point([0, 0, 0]), 10, 'MidSplitCube');
    const splitter = new CubeVolumeSplitterService(cube);

    expect(splitter.isSymmetricSplit('YZ', 5)).toBe(true);
  });

  it('should return all volume in upper when coordinate <= corner', () => {
    const cube = new Cube(new Point([0, 0, 0]), 10, 'UpperAll');
    const splitter = new CubeVolumeSplitterService(cube);
    const result = splitter.splitByPlane('XY', -5);

    expect(result.lowerVolume).toBe(0);
    expect(result.upperVolume).toBe(1000);
  });

  it('should return all volume in lower when coordinate >= corner + edge', () => {
    const cube = new Cube(new Point([0, 0, 0]), 10, 'LowerAll');
    const splitter = new CubeVolumeSplitterService(cube);
    const result = splitter.splitByPlane('XZ', 20);

    expect(result.lowerVolume).toBe(1000);
    expect(result.upperVolume).toBe(0);
  });

  it('should handle zero total volume gracefully (edgeLength = 0)', () => {
    const cube = new Cube(new Point([0, 0, 0]), 0, 'ZeroVolume');
    const splitter = new CubeVolumeSplitterService(cube);
    const result = splitter.splitByPlane('YZ', 0);

    expect(result.lowerVolume).toBe(0);
    expect(result.upperVolume).toBe(0);
    expect(result.lowerPercent).toBe(0);
    expect(result.upperPercent).toBe(0);
  });

  it('should throw error for unknown axis', () => {
    const cube = new Cube(new Point([0, 0, 0]), 10, 'BadAxis');
    const splitter = new CubeVolumeSplitterService(cube);

    expect(() => splitter.splitByPlane('AB' as any, 5)).toThrow('Unknown axis');
  });
});
