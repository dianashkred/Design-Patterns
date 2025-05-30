import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";
import { v4 as uuid } from "uuid";
import { Point } from "./Point";

export abstract class Shape implements ISubject {
  public readonly id: string;
  private observers: Set<IObserver> = new Set();

  constructor(public name: string) {
    this.id = uuid();
  }

  attach(observer: IObserver): void {
    this.observers.add(observer);
  }

  detach(observer: IObserver): void {
    this.observers.delete(observer);
  }

  notify(): void {
    for (const o of this.observers) {
      o.update(this);
    }
  }

  protected changed(): void {
    this.notify();
  }

  abstract getPoints(): Point[];
  abstract isValid(): boolean;
  abstract getArea(): number;
  abstract getVolume(): number;
  abstract getPerimeter(): number;
}


