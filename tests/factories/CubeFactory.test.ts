import { CubeFactory } from '../../src/factories/CubeFactory';
import { Cube } from '../../src/entities/Cube';
import { InvalidShapeError } from '../../src/exceptions/InvalidShapeError';

describe('CubeFactory', () => {
  it('should create Cube from valid string', () => {
    const cube = CubeFactory.createFromString('1,2,3;4');
    expect(cube).toBeInstanceOf(Cube);
    expect(cube?.isValid()).toBe(true);
  });

  it('should return null for invalid edge', () => {
    const cube = CubeFactory.createFromString('1,2,3;abc');
    expect(cube).toBeNull();
  });

  it('should return null if CubeValidator returns false', () => {
    const cube = CubeFactory.createFromString('1,2,3;');
    expect(cube).toBeNull();
  });

  it('should throw InvalidShapeError for malformed input', () => {
    expect(() => CubeFactory.createFromString('a,b,c;d')).toThrow(InvalidShapeError);
  });
});
