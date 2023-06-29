import * as fs from 'fs';
import { Logger } from './product';

export class ConsoleLogger implements Logger {
	log(message: string) {
		console.log(message);
	}
}

export class FileLogger implements Logger {
	log(message: string) {
		fs.appendFileSync('log.txt', message + '\n');
	}
}
