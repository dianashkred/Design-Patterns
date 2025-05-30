import { ShapeParsingService } from '../../src/services/ShapeParsingService';
import { Cube } from '../../src/entities/Cube';
import { Oval } from '../../src/entities/Oval';

describe('ShapeParsingService', () => {
  it('should parse Cube from valid string', () => {
    const result = ShapeParsingService.parseShape('0,0,0;5');
    expect(result).toBeInstanceOf(Cube);
  });

  it('should parse Oval from valid string', () => {
    const result = ShapeParsingService.parseShape('0,0;3,4');
    expect(result).toBeInstanceOf(Oval);
  });

  it('should return null for invalid shape string', () => {
    const result = ShapeParsingService.parseShape('bad,data');
    expect(result).toBeNull();
  });
});
