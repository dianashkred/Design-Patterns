import pino from 'pino';
import path from 'path';

const isTest = process.env.NODE_ENV === 'test';

export const logger = pino(
  isTest
    ? { level: 'silent' } 
    : {
        level: 'info',
        transport: {
          targets: [
            {
              target: 'pino-pretty',
              options: { colorize: true },
            },
            {
              target: 'pino/file',
              options: { destination: path.join(__dirname, '../../logs/app.log') },
            },
          ],
        },
      }
);
