// Абстрактный  класс для всех фигур
export abstract class Shape {
  constructor(public readonly name: string) {}

  // Проверка валидности
  abstract isValid(): boolean;

}

