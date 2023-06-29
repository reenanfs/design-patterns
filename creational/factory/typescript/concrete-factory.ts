import { ConsoleLogger, FileLogger } from './concrete-product';
import { LoggerFactory } from './factory';
import { Logger } from './product';

export class ConsoleLoggerFactory implements LoggerFactory {
	createLogger(): Logger {
		return new ConsoleLogger();
	}
}

export class FileLoggerFactory implements LoggerFactory {
	createLogger(): FileLogger {
		return new FileLogger();
	}
}
