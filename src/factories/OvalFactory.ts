import { Point } from '../entities/Point';
import { Oval } from '../entities/Oval';
import { Shape } from '../entities/Shape';
import { OvalValidator } from '../validators/OvalValidator';
import { InvalidShapeError } from '../exceptions/InvalidShapeError';

export class OvalFactory {
  static createFromString(data: string): Shape | null {
    try {
      const trimmed = data.trim();

      // 1. Проверка наличия двух точек — иначе это невалидный ввод
      const [p1Raw, p2Raw] = trimmed.split(';');
      if (!p1Raw || !p2Raw) {
        throw new InvalidShapeError('Malformed oval input');
      }

      // 2. Если валидатор не прошёл — это просто плохие данные, но не ошибка
      if (!OvalValidator.isValid(trimmed)) {
        return null;
      }

      const p1Coords = p1Raw.split(',').map(Number);
      const p2Coords = p2Raw.split(',').map(Number);
      if (p1Coords.some(isNaN) || p2Coords.some(isNaN)) {
        return null;
      }

      const p1 = new Point(p1Coords);
      const p2 = new Point(p2Coords);
      const oval = new Oval(p1, p2, `Oval-${crypto.randomUUID()}`);
      return oval.isValid() ? oval : null;
    } catch (err) {
      if (err instanceof InvalidShapeError) {
        throw err;
      }
      return null;
    }
  }
}
