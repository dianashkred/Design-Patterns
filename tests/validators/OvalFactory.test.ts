import { OvalFactory } from '../../src/factories/OvalFactory';
import { Oval } from '../../src/entities/Oval';
import { InvalidShapeError } from '../../src/exceptions/InvalidShapeError';

describe('OvalFactory', () => {
  it('should create Oval from valid string', () => {
    const oval = OvalFactory.createFromString('0,0;4,6');
    expect(oval).toBeInstanceOf(Oval);
    expect(oval?.isValid()).toBe(true);
  });

  it('should return null if validator returns false', () => {
    const oval = OvalFactory.createFromString('0,0;bad');
    expect(oval).toBeNull();
  });

  it('should throw InvalidShapeError for malformed input', () => {
    expect(() => OvalFactory.createFromString('bad-input')).toThrow(InvalidShapeError);
  });
});
