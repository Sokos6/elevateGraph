import winston from 'winston';

let transports = [
    new winston.transports.File({
        filename: 'error.log',
        level: 'error',
    }),
    new winston.transports.File({
        filename: 'combined.log',
        level: 'verbose',
    }),
];