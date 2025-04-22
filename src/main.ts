import { readInputFile } from './services/FileReader';
import { OvalFactory } from './factory/OvalFactory';
import { ZeroSizeValidator } from './chain/ZeroSizeValidator';
import { AlignedPointsValidator } from './chain/AlignedPointsValidator';
import { logger } from './logger/logger';
import { OvalService } from './services/OvalService';

async function main() {
  try {
    const lines = await readInputFile('data/input.txt');
    const validOvals = [];

    const validator = new ZeroSizeValidator();
    validator.setNext(new AlignedPointsValidator());

    lines.forEach((line, i) => {
      const parts = line.trim().split(/\s+/).map(Number);
      if (parts.length === 4 && parts.every(n => !isNaN(n))) {
        const oval = OvalFactory.create(`oval-${i}`, ...parts);
        if (validator.handle(oval)) {
          validOvals.push(oval);
          logger.info({
            id: oval.id,
            area: OvalService.area(oval),
            perimeter: OvalService.perimeter(oval),
            isCircle: OvalService.isCircle(oval),
            intersectsOneAxis: OvalService.intersectsOneAxis(oval, 2)
          });
        } else {
          logger.warn(`Validation failed: ${line}`);
        }
      } else {
        logger.warn(`Invalid line format: ${line}`);
      }
    });

    console.log(`Successfully parsed ${validOvals.length} ovals.`);
  } catch (err) {
    logger.error(err);
  }
}

main();