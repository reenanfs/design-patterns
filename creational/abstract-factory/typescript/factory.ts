import { ConfigReader, Logger } from './product';

export interface LoggingFactory {
	createLogger(): Logger;
	createConfigReader(): ConfigReader;
}
