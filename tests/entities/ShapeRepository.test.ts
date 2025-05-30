import { ShapeRepository } from '../../src/entities/ShapeRepository';
import { Point } from '../../src/entities/Point';
import { Cube } from '../../src/entities/Cube';
import { ByIdSpecification } from '../../src/specifications/ByIdSpecification';
import { ByNameSpecification } from '../../src/specifications/ByNameSpecification';

describe('ShapeRepository', () => {
  let repo: ShapeRepository;
  let cube: Cube;

  beforeEach(() => {
    repo = new ShapeRepository();
    cube = new Cube(new Point([1, 2, 3]), 4, 'TestCube');
    repo.add(cube);
  });

  it('should add and retrieve shapes', () => {
    expect(repo.getAll()).toContain(cube);
    expect(repo.getById(cube.id)).toBe(cube);
    expect(repo.getByName(cube.name)).toBe(cube);
  });

  it('should remove shapes and detach observer', () => {
    const result = repo.remove(cube.id);
    expect(result).toBe(true);
    expect(repo.getById(cube.id)).toBeUndefined();
  });

  it('should find shapes by specification', () => {
    const byId = new ByIdSpecification(cube.id);
    expect(repo.find(byId)).toEqual([cube]);

    const byName = new ByNameSpecification(cube.name);
    expect(repo.find(byName)).toEqual([cube]);
  });

  it('should sort shapes using comparator', () => {
    const cube2 = new Cube(new Point([4, 5, 6]), 2, 'B-Cube');
    repo.add(cube2);

    const sorted = repo.sort({
      compare: (a, b) => a.name.localeCompare(b.name),
    });

    expect(sorted.map(s => s.name)).toEqual(['B-Cube', 'TestCube']);
  });
});
