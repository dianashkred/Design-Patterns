import { Cube } from '../entities/Cube';

export class CubeCalculator {
  constructor(private cube: Cube) {}

  getArea(): number {
    const a = this.cube.edgeLength;
    return 6 * a * a; // Площадь
  }

  getVolume(): number {
    const a = this.cube.edgeLength;
    return a ** 3; // Объём 
  }

  getPerimeter(): number {
    const a = this.cube.edgeLength;
    return 12 * a; // Периметр
  }

  baseLiesOnCoordinatePlane(): boolean {
    return (
      this.cube.corner.x === 0 || // лежит ли хотя бы одна из граней куба на координатных плоскостях
      this.cube.corner.y === 0 ||
      this.cube.corner.z === 0
    );
  }
} 

