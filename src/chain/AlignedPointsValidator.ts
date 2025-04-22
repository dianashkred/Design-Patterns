import { AbstractHandler } from './AbstractHandler';
import { Oval } from '../entities/Oval';

export class AlignedPointsValidator extends AbstractHandler {
  handle(oval: Oval): boolean {
    const sameX = oval.topLeft.x === oval.bottomRight.x;
    const sameY = oval.topLeft.y === oval.bottomRight.y;
    if (sameX || sameY) return false;
    return super.handle(oval);
  }
}