import { OvalValidator } from '../../src/validators/OvalValidator';
import { CubeValidator } from '../../src/validators/CubeValidator';

describe('Validators', () => {
  it('should validate correct oval strings', () => {
    expect(OvalValidator.isValid('0,0;4,2')).toBe(true);
    expect(OvalValidator.isValid('1.5,2.5;3.2,4.7')).toBe(true);
  });

  it('should reject invalid oval strings', () => {
    expect(OvalValidator.isValid('0,0,1')).toBe(false);
    expect(OvalValidator.isValid('abc;4,2')).toBe(false);
    expect(OvalValidator.isValid('0,0')).toBe(false);
  });

  it('should validate correct cube strings', () => {
    expect(CubeValidator.isValid('0,0,0;5')).toBe(true);
  });

  it('should reject invalid cube strings', () => {
    expect(CubeValidator.isValid('0,0,0')).toBe(false);
    expect(CubeValidator.isValid('0,0,0;bad')).toBe(false);
    expect(CubeValidator.isValid(';')).toBe(false);
  });
});
