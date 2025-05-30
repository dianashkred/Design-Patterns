// src/validators/BaseShapeValidator.ts
export abstract class BaseShapeValidator {
  protected constructor(
    protected readonly pattern: RegExp
  ) {}

  protected parseParts(line: string): number[][] | null {
    const trimmed = line.trim();
    if (!this.pattern.test(trimmed)) return null;
    return trimmed
      .split(';')
      .map(part => part.split(',').map(Number))
      .filter(coords => coords.every(c => !isNaN(c)));
  }
}
