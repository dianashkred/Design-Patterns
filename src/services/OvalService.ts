// src/services/OvalService.ts
import { Oval } from '../entities/Oval';

export class OvalService {
  static area(oval: Oval): number {
    const a = oval.width / 2;
    const b = oval.height / 2;
    return Math.PI * a * b;
  }

  static perimeter(oval: Oval): number {
    const a = oval.width / 2;
    const b = oval.height / 2;
    return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  }

  static isCircle(oval: Oval): boolean {
    return oval.width === oval.height;
  }

  static intersectsOneAxis(oval: Oval, distance: number): boolean {
    const intersectsX = Math.abs(oval.topLeft.x) < distance || Math.abs(oval.bottomRight.x) < distance;
    const intersectsY = Math.abs(oval.topLeft.y) < distance || Math.abs(oval.bottomRight.y) < distance;
    return (intersectsX || intersectsY) && !(intersectsX && intersectsY);
  }
}