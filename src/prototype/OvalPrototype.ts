import { Point } from '../entities/Point';
import { Oval } from '../entities/Oval';
import { Cloneable } from './Cloneable';

export class OvalPrototype implements Cloneable<Oval> {
  constructor(private prototype: Oval) {}

  clone(newId: string): Oval {
    return new Oval(
      newId,
      new Point(this.prototype.topLeft.x, this.prototype.topLeft.y),
      new Point(this.prototype.bottomRight.x, this.prototype.bottomRight.y)
    );
  }
}
