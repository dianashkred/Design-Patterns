
import { Observer } from '../patterns/Observer';
import { Warehouse } from '../warehouse/Warehouse';
import { v4 as uuid } from 'uuid';
import { Point } from './Point';

export abstract class Shape {
  public readonly id: string;
  private observers: Set<Observer> = new Set();

  constructor(public name: string) {
    this.id = uuid();
    Warehouse.getInstance().update(this);// первый расчёт
    // подписываемся на обновления
    this.attach(Warehouse.getInstance());
  }

  // точки, которые описывают фигуру
  abstract getPoints(): Point[];

  abstract isValid(): boolean;
  abstract getArea(): number;
  abstract getVolume(): number;
  abstract getPerimeter(): number;

  attach(o: Observer) {
    this.observers.add(o);
  }
  detach(o: Observer) {
    this.observers.delete(o);
  }
  protected changed(): void {
    this.observers.forEach(o => o.update(this));
  }
}

