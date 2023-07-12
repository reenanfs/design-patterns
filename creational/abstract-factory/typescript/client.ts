import { ConfigReader, Logger } from './product';
import { LoggingFactory } from './factory';
import { ConsoleLoggingFactory, FileLoggingFactory } from './concrete-factory';

function performLogging(logger: Logger, message: string): void {
	logger.log(message);
}

const fileLoggingFactory: LoggingFactory = new FileLoggingFactory();
const consoleLoggingFactory: LoggingFactory = new ConsoleLoggingFactory();

const fileLogger: Logger = fileLoggingFactory.createLogger();
const fileConfigReader: ConfigReader = fileLoggingFactory.createConfigReader();

const consoleLogger: Logger = consoleLoggingFactory.createLogger();
const consoleConfigReader: ConfigReader =
	consoleLoggingFactory.createConfigReader();

performLogging(consoleLogger, 'Log message to console');
performLogging(fileLogger, 'Log message to file');

consoleConfigReader.readConfig();
fileConfigReader.readConfig();

class Application {
	private loggingFactory: LoggingFactory;
	private logger: Logger | null;
	private configReader: ConfigReader | null;

	constructor(loggingFactory: LoggingFactory) {
		this.loggingFactory = loggingFactory;
		this.logger = null;
		this.configReader = null;
	}

	public setup(): void {
		this.logger = this.loggingFactory.createLogger();
		this.configReader = this.loggingFactory.createConfigReader();
	}

	public run(): void {
		this.setup();
		this.configReader!.readConfig();
		this.logger!.log('Application started');
	}
}

class ApplicationConfigurator {
	public main(mode: string): void {
		let loggingFactory: LoggingFactory;

		if (mode === 'File') {
			loggingFactory = new FileLoggingFactory();
		} else if (mode === 'Console') {
			loggingFactory = new ConsoleLoggingFactory();
		} else {
			throw new Error('Error! Unknown logging mode.');
		}

		const app: Application = new Application(loggingFactory);
		app.run();
	}
}

const configurator: ApplicationConfigurator = new ApplicationConfigurator();
configurator.main('Console');
