import { OvalValidator } from '../../src/validators/OvalValidator';

describe('OvalValidator', () => {
  it('should return true for valid oval input', () => {
    const valid = OvalValidator.isValid('0,0;3,4');
    expect(valid).toBe(true);
  });

  it('should return false if only one point provided', () => {
    const invalid = OvalValidator.isValid('0,0');
    expect(invalid).toBe(false);
  });

  it('should return false if second point is malformed', () => {
    const invalid = OvalValidator.isValid('0,0;bad');
    expect(invalid).toBe(false);
  });
});
