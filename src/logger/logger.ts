import pino from 'pino';

export const logger = pino({
  transport: {
    targets: [
      { target: 'pino-pretty', level: 'info' },
      { target: 'pino/file', options: { destination: './logs/app.log' }, level: 'info' }
    ]
  }
});
