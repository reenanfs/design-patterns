import * as fs from 'fs';
import readline from 'readline';
import { Logger, ConfigReader } from './product';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export class ConsoleLogger implements Logger {
	log(message: string): void {
		console.log(`[Console Logger] ${message}`);
	}
}

export class FileLogger implements Logger {
	log(message: string): void {
		fs.appendFileSync('log.txt', `[File Logger] ${message}\n`);
	}
}

export class ConsoleConfigReader implements ConfigReader {
	readConfig(): void {
		rl.question('[Config Reader] Enter config: \n', (configData: string) => {
			console.log(`[Config Reader] Config is: ${configData}`);
			rl.close();
		});
	}
}

export class FileConfigReader implements ConfigReader {
	readConfig(): void {
		try {
			const configData = fs.readFileSync('config.txt', 'utf-8');
			console.log(`[Config Reader] ${configData}`);
		} catch (error) {
			console.log('[Config Reader] Config file not found.');
		}
	}
}
