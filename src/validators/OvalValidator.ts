// Проверка формата строки для овала
export class OvalValidator {
  private static readonly PATTERN = /^\s*[-\d.,]+\s*;\s*[-\d.,]+\s*$/;
  
  static isValid(line: string): boolean {
    const trimmed = line.trim();
    if (!this.PATTERN.test(trimmed)) return false;

    const [p1Str, p2Str] = trimmed.split(';');
    const p1Coords = p1Str.split(',').map(Number);
    const p2Coords = p2Str.split(',').map(Number);

    return p1Coords.every(c => !isNaN(c)) && p2Coords.every(c => !isNaN(c));
  }
}