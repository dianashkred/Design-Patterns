export class CubeValidator {
  private static readonly PATTERN = /^\s*[-\d.,]+\s*;\s*[-\d.,]+\s*$/;

  static isValid(line: string): boolean {
    const trimmed = line.trim();
    if (!this.PATTERN.test(trimmed)) return false;

    const [pointStr, edgeStr] = trimmed.split(';');
    const coords = pointStr.split(',').map(Number);
    const edge = parseFloat(edgeStr);

    return coords.every(c => !isNaN(c)) && !isNaN(edge);
  }
}