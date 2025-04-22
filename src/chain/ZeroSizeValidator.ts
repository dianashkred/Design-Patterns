import { AbstractHandler } from './AbstractHandler';
import { Oval } from '../entities/Oval';

export class ZeroSizeValidator extends AbstractHandler {
  handle(oval: Oval): boolean {
    if (oval.width === 0 || oval.height === 0) return false;
    return super.handle(oval);
  }
}