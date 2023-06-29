import { Logger } from './product';

export interface LoggerFactory {
	createLogger: () => Logger;
}
