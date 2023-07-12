import { Logger, ConfigReader } from './product';
import { LoggingFactory } from './factory';
import {
	ConsoleConfigReader,
	ConsoleLogger,
	FileConfigReader,
	FileLogger,
} from './concrete-product';

export class FileLoggingFactory implements LoggingFactory {
	createLogger(): Logger {
		return new FileLogger();
	}

	createConfigReader(): ConfigReader {
		return new FileConfigReader();
	}
}

export class ConsoleLoggingFactory implements LoggingFactory {
	createLogger(): Logger {
		return new ConsoleLogger();
	}

	createConfigReader(): ConfigReader {
		return new ConsoleConfigReader();
	}
}
