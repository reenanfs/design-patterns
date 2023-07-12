from factory import LoggingFactory
from product import Logger
from concrete_factory import (
    ConsoleLoggingFactory,
    FileLoggingFactory,
)


def perform_logging(logger: Logger, message: str):
    logger.log(message)


file_logging_factory = FileLoggingFactory()
console_logging_factory = ConsoleLoggingFactory()

file_logger = file_logging_factory.create_logger()
file_config_reader = file_logging_factory.create_config_reader()

console_logger = console_logging_factory.create_logger()
console_config_reader = console_logging_factory.create_config_reader()

perform_logging(console_logger, "Log message to console")
perform_logging(file_logger, "Log message to file")

file_config_reader.read_config()
console_config_reader.read_config()


class Application:
    def __init__(self, logging_factory: LoggingFactory):
        self.logging_factory = logging_factory
        self.logger = None
        self.config_reader = None

    def setup(self):
        self.logger = self.logging_factory.create_logger()
        self.config_reader = self.logging_factory.create_config_reader()

    def run(self):
        self.config_reader.read_config()
        self.logger.log("Application started")


class ApplicationConfigurator:
    def main(self, mode):
        if mode == "File":
            logging_factory = FileLoggingFactory()
        elif mode == "Console":
            logging_factory = ConsoleLoggingFactory()
        else:
            raise Exception("Error! Unknown logging mode.")

        app = Application(logging_factory)
        app.setup()
        app.run()


configurator = ApplicationConfigurator()
configurator.main("Console")
