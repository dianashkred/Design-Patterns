import { Oval } from '../entities/Oval';

export abstract class Validator {
  protected next: Validator | null = null;

  setNext(handler: Validator): Validator {
    this.next = handler;
    return handler;
  }

  handle(oval: Oval): boolean {
    if (this.next) {
      return this.next.handle(oval);
    }
    return true;
  }
}

export class ZeroSizeValidator extends Validator {
  handle(oval: Oval): boolean {
    if (oval.width === 0 || oval.height === 0) return false;
    return super.handle(oval);
  }
}

export class AlignedPointsValidator extends Validator {
    handle(oval: Oval): boolean {
      const sameX = oval.topLeft.x === oval.bottomRight.x;
      const sameY = oval.topLeft.y === oval.bottomRight.y;
      if (sameX || sameY) return false;
      return super.handle(oval);
    }
  }