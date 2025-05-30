// src/validators/CubeValidator.ts
import { BaseShapeValidator } from './BaseShapeValidator';
export class CubeValidator extends BaseShapeValidator {
  constructor() {
    super(/^\s*[-\d.,]+\s*;\s*[-\d.,]+\s*$/);
  }
  static isValid(line: string): boolean {
    const parts = new CubeValidator().parseParts(line);
    return !!parts && parts[1]?.length === 1;
  }
}