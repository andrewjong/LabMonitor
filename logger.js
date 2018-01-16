const winston = require('winston');  // logging library
// pretty format for our logger
const level = process.env.LOG_LEVEL || 'silly';
const consoleFormat = winston.format.printf(function (info) {
    return `${info.level}: ${info.message}`;
});
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), consoleFormat) })
    ],
    level: level,
});

module.exports = logger;