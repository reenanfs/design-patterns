import { ConsoleLoggerFactory, FileLoggerFactory } from './concrete-factory';
import { Logger } from './product';
import { simpleFactory } from './simple-factory';

const consoleLoggerFactory = new ConsoleLoggerFactory();
const fileLoggerFactory = new FileLoggerFactory();

const consoleLogger = consoleLoggerFactory.createLogger();
const fileLogger = fileLoggerFactory.createLogger();

const performLog = (logger: Logger, message: string) => {
	logger.log(message);
};

performLog(consoleLogger, 'Log message to console');
performLog(fileLogger, 'Log message to file');

const consoleLogger2 = simpleFactory('console');
const fileLogger2 = simpleFactory('file');

performLog(consoleLogger2, 'Log message to console 2');
performLog(fileLogger2, 'Log message to file 2');
