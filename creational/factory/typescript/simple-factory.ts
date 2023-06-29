import { ConsoleLogger, FileLogger } from './concrete-product';

export const simpleFactory = (loggerType: string) => {
	const loggerTypes = {
		console: ConsoleLogger,
		file: FileLogger,
	};

	if (!(loggerType in loggerTypes)) throw new Error('Invalid logger type.');

	return new loggerTypes[loggerType as keyof typeof loggerTypes]();
};
