import { Oval } from '../entities/Oval';

export abstract class AbstractHandler {
  protected next: AbstractHandler | null = null;

  setNext(handler: AbstractHandler): AbstractHandler {
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