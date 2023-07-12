export interface Logger {
	log(message: string): void;
}

export interface ConfigReader {
	readConfig(): void;
}
