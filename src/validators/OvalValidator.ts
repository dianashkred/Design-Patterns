// src/validators/OvalValidator.ts
import { BaseShapeValidator } from './BaseShapeValidator';

export class OvalValidator extends BaseShapeValidator {
  constructor() {
    super(/^\s*[-\d.,]+\s*;\s*[-\d.,]+\s*$/);
  }
  
  static isValid(line: string): boolean {
    const parts = new OvalValidator().parseParts(line);
    return !!parts && parts.length === 2;
  }
}