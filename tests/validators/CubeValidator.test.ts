import { CubeValidator } from '../../src/validators/CubeValidator';

describe('CubeValidator', () => {
  it('should return true for valid cube input', () => {
    const valid = CubeValidator.isValid('1,2,3;5');
    expect(valid).toBe(true);
  });

  it('should return false for input with wrong format', () => {
    const invalid = CubeValidator.isValid('1,2,3;');
    expect(invalid).toBe(false);
  });

  it('should return false for missing edge', () => {
    const invalid = CubeValidator.isValid('1,2,3');
    expect(invalid).toBe(false);
  });

  it('should return false if edge is NaN', () => {
    const invalid = CubeValidator.isValid('1,2,3;abc');
    expect(invalid).toBe(false);
  });
});
